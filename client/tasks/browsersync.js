'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: './www/'
    }
  });
});

gulp.task('js-watch', ['dist-copy-js'], browserSync.reload);
gulp.task('sass-watch', ['sass'], browserSync.reload);
gulp.task('config-watch', ['default'], browserSync.reload);
gulp.task('image-watch', ['dist-min-images'], browserSync.reload);
