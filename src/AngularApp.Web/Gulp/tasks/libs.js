'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task("libs", function (cb) {

    for (var i = 0; i < config.libs.src.length; i++) {
        gulp.src(config.libs.src[i])
          .pipe(gulp.dest(config.libs.dest));
    }

    cb();
});
