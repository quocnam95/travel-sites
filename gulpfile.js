var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer= require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested =require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();



// var watch = require('gulp-watch');
gulp.task('watch', function() {
  browserSync.init({
    notify:false,
    server:{
      baseDir:"app"
    }
  });

  gulp.watch('./app/assets/styles/**/*.css',gulp.series('styles','cssInject'));
  gulp.watch('./app/index.html',gulp.parallel('sync'));
});

gulp.task('styles',function(){

  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport,cssvars, nested,autoprefixer,]))
  .pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('sync',function(done){
  browserSync.reload();
  done();
});
gulp.task('cssInject', function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});