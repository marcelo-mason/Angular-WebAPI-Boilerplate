'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('webdriver:update', plugins.protractor.webdriver_update);
gulp.task('webdriver', plugins.protractor.webdriver);

gulp.task('test:protractor', ['webdriver:update', 'webdriver'], function () {

  return gulp.src('./Test/e2e/**/*.js')
    .pipe(plugins.protractor.protractor({
        configFile: config.test.protractor
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });

});