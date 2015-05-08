'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var del     = require('del');

gulp.task('clean', function (cb) {

    del([
        config.styles.dest + '/**/*',
        config.fonts.dest + '/**/*',
        config.images.dest + '/**/*',
        config.libs.dest + '/**/*',
        config.scripts.dest + '/**/*'
    ], cb);

});
