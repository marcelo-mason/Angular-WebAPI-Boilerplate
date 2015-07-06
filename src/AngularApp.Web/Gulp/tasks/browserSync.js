'use strict';

var config      = require('../config');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', function () {

    browserSync({
        port: config.browserSync.browserport,
        ui: {
            port: config.browserSync.uiport
        },
        proxy: 'localhost:' + config.browserSync.serverport,
        files: config.browserSync.watch
    });

});
