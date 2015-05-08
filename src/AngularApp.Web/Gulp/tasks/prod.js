'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', function (cb) {

    global.isProd = true;

    runSequence('clean', 'build', 'gzip', cb);

});
