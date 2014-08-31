var gulp 		= require("gulp"),
	sass 		= require('gulp-sass'),
	uglify	 	= require('gulp-uglify'),
	minifyCSS 	= require('gulp-minify-css'),
	concat 		= require('gulp-concat');


gulp.task('javascript', function(){
	return gulp.src('./js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/min'))
});

gulp.task('css', function(){
	return gulp.src('./css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/css'))
})



gulp.task('default', function(){
	gulp.run('css');
	gulp.watch('./css/*.css', function(){
		gulp.run('css');
	})
});