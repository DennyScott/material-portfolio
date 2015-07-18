'use strict';

var gulp = require('gulp'),
  requireDir = require('require-dir');

requireDir('./tasks');

gulp.task('default', [
  'dist',
  'sass',
  'browser-sync'
]);

gulp.task('pre-push', ['default',
  'lint',
  'lint-scss',
  'style-check',
  'unit-test'
]);
