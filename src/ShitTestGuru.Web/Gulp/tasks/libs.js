'use strict';

var gulp = require("gulp"),
    config = require('../config');

gulp.task("libs", function () {
    
    for (var i = 0; i < config.libs.src.length; i++) {
        gulp.src(config.libs.src[i])
          .pipe(gulp.dest(config.libs.dest));
    }

});
