'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('fonts', function () {

    return gulp.src(config.fonts.src)
        .pipe(plugins.changed(config.fonts.dest))
        .pipe(gulp.dest(config.fonts.dest));

});
