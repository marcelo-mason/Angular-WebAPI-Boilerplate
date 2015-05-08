'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {

    runSequence('styles', 'libs', 'images', 'fonts', 'views', 'browserify', cb);

});