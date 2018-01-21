'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var argv = require('yargs').argv;
var path = require('path');
var conf = require('./conf');

gulp.task('watch', ['build-watchify'], () => {
  var watcher = gulp.watch(path.join(conf.paths.src, '**/*'), ['refresh']);
  watcher.on('change', (event) => {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
})

gulp.task('serve', ['watch'], () => {
  return browserSync({ server:  { baseDir: conf.paths.dist, index: 'index.html' } });
})

gulp.task('refresh', ['build-watchify'], browserSync.reload)
