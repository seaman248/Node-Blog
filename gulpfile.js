var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	coffee = require('gulp-coffee');

gulp.task('coffee', function(){
	gulp.src('public/javascript/src/**/*.coffee')
		.pipe(coffee())
		.pipe(gulp.dest('public/javascript/'));
});

gulp.task('uglify', function(){
	gulp.src('public/javascript/**/*js')
		.pipe(uglify)
		.pipe(gulp.dest('public/javascript/'));
});

gulp.task('watch', function(){
	gulp.watch('public/javascript/src/**/*.coffee', ['coffee']);
})


// Production
gulp.task('default', ['coffee', 'uglify']);