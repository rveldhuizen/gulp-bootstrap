'use strict';

// Node modules
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    path = require('./gulp/config.js').path,
    config = require('./gulp/server.js').development;


// SASS compiler
gulp.task('sass', function () {
    return gulp.src( path.sass_files )
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(sass( {outputStyle: 'compressed'} ))
        .pipe(autoprefixer({
            browsers: ['> 1%','last 2 versions','firefox >= 4','safari 7','safari 8','IE 8','IE 9','IE 10','IE 11'],
            cascade: false
        }))
        .pipe(sourcemaps.write(path.css_maps))
        .pipe(gulp.dest(path.css_dest))
        .pipe(browserSync.stream());
});


// JS uglify
gulp.task('compress', function() {
   return gulp.src(path.js_files)
       .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
       .pipe(uglify())
       .pipe(gulp.dest(path.js_dest))
       .pipe(browserSync.stream());
});


// Fonts
gulp.task('fonts', function() {
   return gulp.src(path.font_files)
       .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
       .pipe(gulp.dest(path.font_dest))
       .pipe(browserSync.stream());
});


// Images
gulp.task('images', function() {
    return gulp.src(path.image_files)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(gulp.dest(path.image_dest))
        .pipe(browserSync.stream());
});


// Development watcher
gulp.task('develop',['sass', 'compress', 'images', 'fonts'], function() {
    gulp.watch(path.sass_files, ['sass']);
    gulp.watch(path.js_files, ['compress']);
    gulp.watch(path.image_files, ['images']);
    gulp.watch(path.font_files, ['fonts']);
    gulp.watch(path.public + "/*.html").on('change', browserSync.reload);
    browserSync(config);
});