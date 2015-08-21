'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('watch', ['watch:browserify', 'watch:browserSync'], function () {
    
    gulp.watch(config.styles.src, ['build:styles']);
    gulp.watch(config.images.src, ['build:images']);
    gulp.watch(config.fonts.src, ['build:fonts']);
    gulp.watch(config.views.watch, ['build:views']);

    for (var i = 0; i < config.libs.src.length; i++) {
        gulp.watch(config.libs.src[i], ['build:libs']);
    }
});