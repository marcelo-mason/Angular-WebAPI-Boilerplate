'use strict';

var config = require('../config'),
    gulp = require('gulp');

gulp.task('watch', function() {

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['lint']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
  gulp.watch(config.fonts.src,   ['fonts']);
  gulp.watch(config.views.watch, ['views']);

  for (var i = 0; i < config.libs.src.length; i++) {
      gulp.watch(config.libs.src[i], ['libs']);
  }

});