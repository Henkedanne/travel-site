var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
    console.log("YEY");
});

gulp.task('html', function() {
    console.log("Something cool with html");
});
gulp.task('styles', function() {
    console.log("Something scss or postCSS");
});

gulp.task('watch', function () {
    watch('./app/index.html', function() {
        gulp.start('html');
    })
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});