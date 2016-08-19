'use strict';

var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

// default task used to deploy the application locally. It calls the clean task, the sass task, then runs the default tasks in the callback.
gulp.task('default', ['clean', 'sass'], function () {

    gulp.src([
        '.htaccess',
        'data/**/*',
        'files/**/*',
        'fonts/**/*',
        'html/**/*',
        'images/**/*',
        'index.html',
        'js/**/*',
        'robots.txt',
        'sitemap.xml'
    ], {base: './'})
        .pipe(gulp.dest('./dist/'));

    gulp.src([
            './bower_components/backbone/backbone-min.js',
            './bower_components/backbone/backbone-min.map'
        ])
        .pipe(gulp.dest('./dist/js/libs/backbone'));

    gulp.src([
            './bower_components/backbone.marionette/lib/backbone.marionette.min.js',
            './bower_components/backbone.marionette/lib/backbone.marionette.min.js.map'
        ])
        .pipe(gulp.dest('./dist/js/libs/backbone.marionette'));

    gulp.src('./bower_components/bootstrap/dist/css/*')
        .pipe(gulp.dest('./dist/css/libs/bootstrap/css'));

    gulp.src('./bower_components/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('./dist/css/libs/font-awesome/css'));

    gulp.src('./bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('./dist/css/libs/font-awesome/fonts'));

    gulp.src('./bower_components/bootstrap/dist/js/*')
        .pipe(gulp.dest('./dist/js/libs/bootstrap'));

    gulp.src('./bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./dist/js/libs/jquery'));

    gulp.src('./bower_components/requirejs/require.js')
        .pipe(gulp.dest('./dist/js/libs/requirejs'));

    gulp.src([
            './bower_components/underscore/underscore-min.js',
            './bower_components/underscore/underscore-min.map'
        ])
        .pipe(gulp.dest('./dist/js/libs/underscore'));
});

// compile sass into css into the dist folder
gulp.task('sass', ['clean'], function () {
  return gulp.src(['./sass/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/css'));
});

// Used to minify all of our javascript for production
gulp.task('minify-js', function () {
  return gulp.src('./js/**/*.js')
    .pipe(concat('concat.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('app-libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch([
      './sass/**/*.scss',
      './data/**/*.json',
      './images/**/*',
      './js/**/*.js',
      './html/**/*.html',
      './*.html'
  ], ['default'])
});

// deletes all items in the ./dist folder  
gulp.task('clean', function () {
  return del('./dist/*');
});