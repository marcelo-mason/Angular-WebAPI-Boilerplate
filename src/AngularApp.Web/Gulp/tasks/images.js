'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('build:images', function () {

    return gulp.src(config.images.src)
        .pipe(plugins.changed(config.images.dest)) // Ignore unchanged files
        .pipe(plugins.if(global.isProd, plugins.imagemin())) // Optimize
        .pipe(gulp.dest(config.images.dest));

});