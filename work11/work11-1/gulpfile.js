var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css');
 
gulp.task('styleLess', function () {
    gulp.src('less/jike.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('default', function () {
    gulp.watch('less/*.less', ['styleLess']); //当所有less文件发生改变时，调用styleLess任务
});

gulp.task('cssmin', function () {
    gulp.src('css/jike.css')
        .pipe(cssmin())
        .pipe(gulp.dest('css/min'));
});