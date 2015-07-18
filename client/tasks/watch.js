'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  paths = require('../config/paths.js');


gulp.task('watch', function() {
  gulp.watch(paths.client + 'scss/**/*.scss', ['sass-watch']);
  gulp.watch(paths.app + 'components/**/*.js', ['js-watch']);
  gulp.watch(paths.app + 'components/**/*.html', ['js-watch']);
  gulp.watch(paths.app + 'image/**/*', ['image-watch']);
  gulp.watch(paths.config + "**/*", ['config-watch']);
});


