'use strict';

var mkdirp = require('mkdirp'),
  gulp = require('gulp'),
  wrap = require('gulp-wrap'),
  ngHtml2Js = require('gulp-ng-html2js'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  ngAnnotate = require('gulp-ng-annotate'),
  rename = require('gulp-rename'),
  thirdPartyJs = require('../config/third-party.js'),
  paths = require('../config/paths.js'),
  sourcemaps = require('gulp-sourcemaps'),
  imagemin = require('gulp-imagemin'),
  clean = require('gulp-clean'),
  htmlmin = require('gulp-htmlmin');

gulp.task('dist-prep', function(cb) {
  mkdirp.sync(paths.dist);
  mkdirp.sync(paths.tmp);
  cb();
});

gulp.task('dist-index', function() {
  return gulp.src('index.html', {cwd: paths.app})
  .pipe(gulp.dest(paths.dist));
});

gulp.task('dist-tmp-js', function() {
  return gulp.src([
    '!generated/environment.*test.js',
    '**/*.js'
  ], { cwd: paths.app + 'components/' })
  .pipe(sourcemaps.init())
  .pipe(ngAnnotate({ single_quotes: true }))
  .pipe(wrap('(function(){\n<%= contents %>\n})();'))
  .pipe(uglify({mangle: false}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.tmp));
});

gulp.task('dist-tmp-html', function() {
  return gulp.src(['!index.html', 'components/**/*.html'], { cwd: paths.app })
  .pipe(htmlmin({collapseWhiteSpace: true}))
  .pipe(ngHtml2Js({
    moduleName: 'portfolio',
    stripPrefix: paths.app.replace(/\\/g, '/'),
    prefix: 'js/'
  }))
  .pipe(rename({extname: '.html.js'}))
  .pipe(uglify())
  .pipe(gulp.dest(paths.tmp));
});

gulp.task('dist-tmp-deps', function() {
  return gulp.src(thirdPartyJs, { cwd: paths.app + 'lib' })
  .pipe(concat('deps.js'))
  .pipe(gulp.dest(paths.tmp));
});


gulp.task('dist-copy-js', ['dist-tmp-js', 'dist-tmp-html', 'dist-tmp-deps'], function() {
  return gulp.src([
    'deps.js',
    '**/*.module.js',
    '**/*.js'
  ], { cwd: paths.tmp })
  .pipe(concat('app.js'))
  .pipe(gulp.dest(paths.dist + 'js'));
});

gulp.task('dist-min-images', function() {
  return gulp.src(paths.app + 'img/*')
  .pipe(imagemin())
  .pipe(gulp.dest(paths.dist + 'img/'));
});

gulp.task('dist-copy-assets', function() {
  return gulp.src([
    '!index.html',
    '!css/**/*',
    '!components/**/*',
    '!lib/**/*',
    '!img/**/*',
    '**/*'
  ], { cwd: paths.app })
  .pipe(gulp.dest(paths.dist));
});

gulp.task('dist-clean', function() {
  return gulp.src(paths.dist + '*', {read: false})
  .pipe(clean());
});

gulp.task('dist', [
  'dist-prep',
  'dist-tmp-js', 'dist-tmp-html', 'dist-tmp-deps',
  'sass', 'dist-min-images', 'dist-copy-js', 'dist-copy-assets'
]);
