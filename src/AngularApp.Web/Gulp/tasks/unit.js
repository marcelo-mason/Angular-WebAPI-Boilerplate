'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('test:unit', ['build:views'], function () {

    // Nonsensical source to fall back to files listed in karma.conf.js,
    // see https://github.com/lazd/gulp-karma/issues/9
    return gulp.src('./thisdoesntexist')
      .pipe(pluginskarma({
          configFile: config.test.karma,
          action: 'run'
      }))
      .on('error', function (err) {
          // Make sure failed tests cause gulp to exit non-zero
          throw err;
      });

});