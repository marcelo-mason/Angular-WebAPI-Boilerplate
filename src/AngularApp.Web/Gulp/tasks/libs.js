'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task("libs", function () {

    return gulp.src(config.libs.src)
        .pipe(gulp.dest(config.libs.dest));

});
