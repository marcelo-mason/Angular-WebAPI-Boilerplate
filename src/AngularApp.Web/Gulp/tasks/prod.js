'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default:prod', ['clean'], function (cb) {

    global.isProd = true;

    runSequence('build', 'build:gzip', cb);

});
