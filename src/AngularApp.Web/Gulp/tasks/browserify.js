'use strict';

var handleErrors    = require('../util/handleErrors');
var config          = require('../config');
var gulp            = require('gulp');
var plugins         = require('gulp-load-plugins')();

var source          = require('vinyl-source-stream');
var transform       = require('vinyl-transform');
var buffer          = require('vinyl-buffer');
var watchify        = require('watchify');
var browserify      = require('browserify');
var babelify        = require('babelify');
var debowerify      = require('debowerify');
var ngAnnotate      = require('browserify-ngannotate');

function buildScript(file, watch) {

    var b = browserify({
        entries: config.browserify.entries,
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }, watchify.args);

    if (watch) {
        b = watchify(b);
        b.on('update', function () {
            plugins.util.log('Bundling...');
            rebundle();
        });
    }

    var transforms = [
      'brfs',
      'bulkify',
      babelify,
      debowerify,
      ngAnnotate
    ];

    transforms.forEach(function (transform) {
        b.transform(transform);
    });
    
    function rebundle() {

        var stream = b.bundle();
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

    if (!watch)
        return rebundle();
}

gulp.task('browserify', function () {
    return buildScript(config.browserify.bundleName, false);
});

gulp.task('watchify', function () {
    buildScript(config.browserify.bundleName, !global.isProd);
});
