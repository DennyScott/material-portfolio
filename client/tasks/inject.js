'use strict';

var gulp = require('gulp'),
  inject = require('gulp-inject'),
  paths = require('../config/paths.js'),
  thirdPartyJs = require('../config/third-party.js');

gulp.task('inject', ['sass'], function() {

  var depSources = gulp.src(thirdPartyJs, {
    cwd: paths.app + '/lib',
    read: false
  });

  return gulp.src('index.html', { cwd: paths.app })
    .pipe(inject(depSources, { relative: true }))
    .pipe(gulp.dest(paths.app));
});
