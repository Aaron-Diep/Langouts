var gulp 		= require("gulp"),
	sass 		= require('gulp-ruby-sass'),
	uglify	 	= require('gulp-uglify'),
	minifyCSS 	= require('gulp-minify-css'),
	concat 		= require('gulp-concat'),
	livereload 	= require('gulp-livereload');

var paths = {
		src:{
			css:"css/sass/*.scss",
			js:"js/*.js"
		},
		dest:{
			css:"dist/css",
			js:"dist/js"
		}
	}


gulp.task('javascript', function(){
	return gulp.src(paths.src.js)
		.pipe(uglify())
		.pipe(gulp.dest(paths.dest.js))
});

gulp.task('sass', function(){
	return gulp.src(paths.src.css)
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/css'))
		.pipe(livereload());
})



gulp.task('default', function(){

	gulp.run('sass');
	gulp.run('javascript');
	gulp.watch(paths.src.css, function(){
		gulp.run('sass');
	});
	gulp.watch(paths.src.js, function(){
		gulp.run('javascript');
	});
});