'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	lintspaces = require('gulp-lintspaces'),
	jscs = require('gulp-jscs'),
	paths = require('../config/paths.js'),
  scsslint = require('gulp-scss-lint');

gulp.task('lint', function() {
	return gulp.src('components/**/*.js', { cwd: paths.app })
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('lint-spaces', function() {
	return gulp.src('components/**/*.js', { cwd: paths.app })
		.pipe(lintspaces({
			editorconfig: paths.root + '.editorconfig',
			ignores: ['js-comments']
		}))
		.pipe(lintspaces.reporter());
});

gulp.task('lint-scss', function() {
  gulp.src('scss/*.scss')
    .pipe(scsslint());
});

gulp.task('style-check', function() {
	return gulp.src('components/**/*.js', { cwd: paths.app })
		.pipe(jscs());
});
