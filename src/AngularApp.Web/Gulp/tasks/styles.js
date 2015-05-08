'use strict';

var handleErrors = require('../util/handleErrors');
var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('styles', function () {

    return gulp.src(config.styles.src)
        .pipe(gulp.dest(config.styles.sass))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({
            sourceComments: !global.isProd,
            sourceMap: 'sass',
            outputStyle: global.isProd ? 'compressed' : 'nested'
        }))
        .pipe(plugins.autoprefixer("last 2 versions", "> 1%", "ie 8"))
        .on('error', handleErrors)
        .pipe(plugins.sourcemaps.write("./", { includeContent: false, sourceRoot: 'sass' }))
        .pipe(gulp.dest(config.styles.dest));

});