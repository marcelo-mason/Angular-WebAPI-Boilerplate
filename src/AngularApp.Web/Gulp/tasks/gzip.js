'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('gzip', function () {

    return gulp.src(config.gzip.src)
      .pipe(plugins.gzip(config.gzip.options))
      .pipe(gulp.dest(config.gzip.dest));

});
