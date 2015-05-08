'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('lint', function () {

  return gulp.src([config.scripts.src])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));

});