const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('serve', function(){
  nodemon({
      script: 'index.js'
    })
    .on('restart', function () {
      console.log('Node server restarted!')
    })
});

gulp.task('default', ['serve']);
