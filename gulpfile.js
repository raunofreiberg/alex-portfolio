// gulpfile.js

// load gulp
var gulp = require('gulp');

// load gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass())
    .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
    .pipe(gulp.dest('css'));
});

// define the gulp task that will watch for changes in your sass
gulp.task('watch', function() {
  gulp.watch('scss/**/*', ['sass']);
});

// define the default gulp task
gulp.task('default', ['sass', 'watch']);