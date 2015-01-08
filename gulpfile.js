var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	coffee = require('gulp-coffee'),
	gutil = require('gulp-util');

gulp.task('coffee', function(){
	gulp.src('public/javascripts/src/**/*.coffee')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('public/javascripts/'));
});

gulp.task('uglify', function(){
	gulp.src('public/javascripts/**/*js')
		.pipe(uglify)
		.pipe(gulp.dest('public/javascripts/'));
});

gulp.task('watch', function(){
	gulp.watch('public/javascripts/src/**/*.coffee', ['coffee']);
})


// Production
gulp.task('default', ['coffee', 'uglify']);