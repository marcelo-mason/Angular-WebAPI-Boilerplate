'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

// Views task
gulp.task('views', function () {
    
    // Put our index.html in the dist folder
    gulp.src('App/index.html')
      .pipe(gulp.dest(config.dist.root));

    // Process any other view files from app/views
    return gulp.src(config.views.src)
      .pipe(plugins.angularTemplatecache({
          standalone: true
      }))
      .pipe(gulp.dest(config.views.dest));

});