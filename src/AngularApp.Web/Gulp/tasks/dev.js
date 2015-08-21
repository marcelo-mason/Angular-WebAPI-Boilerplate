'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default:dev', ['clean'], function (cb) {

    global.isProd = false;

    runSequence('build', 'watch', cb);

});