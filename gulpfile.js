var gulp   = require('gulp');
var less   = require('gulp-less');
var path   = require('path');
var sass   = require('gulp-sass');
var stylus = require('gulp-stylus');

// Less files
gulp.task('less', function() {
	gulp.src('./less/example.less')
		.pipe(less())
		.pipe(gulp.dest('./css'));
});

// Sass files
gulp.task('sass', function () {
    gulp.src('./sass/example.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// Stylus files
gulp.task('styl', function () {
  gulp.src('./stylus/example.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
	// do something here
});
