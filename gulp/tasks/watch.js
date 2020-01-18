var gulp = require('gulp'),
browserSync = require('browser-sync').create();
//
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
//  
gulp.task('sync',function(done){
    browserSync.reload();
    done();
  });
  gulp.task('cssInject', function() {
    return gulp.src('./app/temp/styles/styles.css')
      .pipe(browserSync.stream());
  });