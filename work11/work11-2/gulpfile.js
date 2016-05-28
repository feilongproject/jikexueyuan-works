var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css');
 
gulp.task('styleLess', function () {
    gulp.src('src/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    gulp.watch('src/*.less', ['styleLess']); //当所有less文件发生改变时，调用styleLess任务
});

gulp.task('cssmin', function () {
    gulp.src('dist/main.css')
        .pipe(cssmin())
        .pipe(gulp.dest('min'));
});