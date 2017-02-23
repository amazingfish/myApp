const gulp = require('gulp');
const less = require('gulp-less');
const px2rem = require('gulp-px3rem');
const imageMin = require('gulp-imagemin');
const rename = require('gulp-rename');

gulp.task('less', function() {
	gulp.src('less/*.less')
		.pipe(less())
		.pipe(px2rem({
			remUnit: 40,
			remPrecision: 4
		}))
		.pipe(rename(function(path){
			var s=path.basename.replace('.debug','');

			path.basename=s;
		}))
		.pipe(gulp.dest('build/css'))
});
gulp.task('imagemin',function(){
	gulp.src('img/*.{png,gif,jpg}')
	.pipe(imageMin())
	.pipe(gulp.dest('build/img'))
})

gulp.task('watch', function() {
	gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['watch', 'less','imagemin']);