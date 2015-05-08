'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function (cb) {

    global.isProd = true;

    runSequence('build', 'gzip', cb);

});