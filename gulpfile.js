var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	coffee = require('gulp-coffee'),
	gutil = require('gulp-util'),
	minifyCSS = require('gulp-minify-css');

gulp.task('coffee', function () {
    'use strict';
	gulp.src('public/javascripts/src/**/*.coffee')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('public/javascripts/'));
});

gulp.task('uglify', function () {
    'use strict';
	gulp.src('public/javascripts/**/*js')
		.pipe(uglify())
		.pipe(gulp.dest('public/javascripts/'));
	gulp.src('public/stylesheets/style.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function () {
    'use strict';
	gulp.watch('public/javascripts/src/**/*.coffee', ['coffee']);
});


// Production
gulp.task('default', ['coffee', 'uglify', 'watch']);
