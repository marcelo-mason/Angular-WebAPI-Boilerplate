'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('test', function(cb) {

    runSequence('test:unit', 'test:protractor', cb);

});