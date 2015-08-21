'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {

    runSequence(['build:styles', 'build:libs', 'build:images', 'build:fonts', 'build:views'], 'build:browserify', cb);

});