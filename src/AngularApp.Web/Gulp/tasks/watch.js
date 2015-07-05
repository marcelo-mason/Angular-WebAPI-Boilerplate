'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('watch', ['watchify'], function () {
    
    gulp.watch(config.styles.src, ['styles']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src, ['fonts']);
    gulp.watch(config.views.watch, ['views']);

    for (var i = 0; i < config.libs.src.length; i++) {
        gulp.watch(config.libs.src[i], ['libs']);
    }
});