'use strict';

var handleErrors = require('../util/handleErrors');
var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var watchify    = require('watchify');
var browserify  = require('browserify');
var babelify    = require('babelify');
var debowerify  = require('debowerify');
var ngAnnotate  = require('browserify-ngannotate');


// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {

    var bundler = browserify({
        entries: config.browserify.entries,
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }, watchify.args);

    if (!global.isProd) {
        bundler = watchify(bundler);
        bundler.on('update', function () {
            rebundle();
        });
    }

    var transforms = [
      babelify,
      debowerify,
      ngAnnotate,
      'brfs',
      'bulkify'
    ];

    transforms.forEach(function (transform) {
        bundler.transform(transform);
    });

    function rebundle() {
        var stream = bundler.bundle();
        var createSourcemap = global.isProd && config.browserify.sourcemap;

        return stream.on('error', handleErrors)
          .pipe(source(file))
          .pipe(plugins.if(createSourcemap, buffer()))
          .pipe(plugins.if(createSourcemap, plugins.sourcemaps.init()))
          .pipe(plugins.if(global.isProd, plugins.streamify(plugins.uglify({
              compress: { drop_console: true }
          }))))
          .pipe(plugins.if(createSourcemap, plugins.sourcemaps.write('./')))
          .pipe(gulp.dest(config.scripts.dest));
    }

    return rebundle();
}

gulp.task('browserify', function () {

    return buildScript('main.js');

});
