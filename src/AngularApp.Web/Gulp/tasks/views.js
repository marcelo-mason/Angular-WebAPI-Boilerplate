'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

// Views task
gulp.task('views', function () {
    
    gulp.src(config.views.index)
      .pipe(gulp.dest(config.dist.root));

    return gulp.src(config.views.src)
      .pipe(plugins.angularTemplatecache({
          standalone: true
      }))
      .pipe(gulp.dest(config.views.dest));

});