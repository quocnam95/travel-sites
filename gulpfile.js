var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer= require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested =require('postcss-nested');
// var watch = require('gulp-watch');
gulp.task('watch', function() {
  gulp.watch('./app/assets/styles/**/*.css',gulp.series('styles'));
});

gulp.task('styles',function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssvars, nested,autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});