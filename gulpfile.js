'use strict';

let gulp = require('gulp');
let jspm = require('jspm');

let customConfig = require('./static/config.custom.js');

let sass = require('gulp-sass');

let watch = require('gulp-watch');
let rename = require('gulp-rename');
let path = require('path');
let contains = require('gulp-contains');
let fs = require('fs');

let runSequence = require('run-sequence');

let autoprefixer = require('gulp-autoprefixer');

let jshint = require('gulp-jshint');
let jscs = require('gulp-jscs');
let tslint = require('gulp-tslint');
let sassLint = require('gulp-sass-lint');

let tsSourceFiles = './jspmAssets/app/**/*.ts';
let jsSourceFiles = './jspmAssets/app/**/*.js';

gulp.task('jspm:install', () => {
    jspm.setPackagePath('.');
    return jspm.install(true, { lock: true });
});

gulp.task('jspm:unbundle', cb => {
    jspm.setPackagePath('.');
    jspm.unbundle()
    .then(function () { cb(); })
    .catch(cb);
});

gulp.task('jspm:prod', ['analyze', 'jspm:unbundle', 'jspm:install'], cb => {
    jspm.setPackagePath('.');

    let builder = new jspm.Builder();
    builder.config(customConfig);

    let bundleConfig = {
        minify: true,
        sourceMaps: false,
        sourceMapContents: false,
        injectConfig: true
    };
    
    builder.bundle(tsSourceFiles, './static/build/main.js', bundleConfig)
    .then(() => {
        cb();
    })
    .catch(cb);
});

gulp.task('analyze:js', () => {
    return gulp.src(jsSourceFiles)
    // Run JS Linter
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))

    // Run JS Checkstyle
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('analyze:ts', function () {
    return gulp.src(tsSourceFiles)
    // Run JS Linter
    .pipe(tslint({
        formatter: 'stylish'
    }))
    .pipe(tslint.report({
        emitError: false
    }));
});

gulp.task('analyze', ['analyze:js', 'analyze:ts']);

gulp.task('dev', ['jspm:unbundle']);
gulp.task('prod', ['jspm:prod']);

gulp.task('default', ['jspm:unbundle']);