'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean'], function (cb) {

    cb = cb || function () { };

    runSequence(['libs', 'styles', 'images', 'fonts', 'views', 'browserify'], cb);
});
