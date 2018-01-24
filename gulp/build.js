'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var browserify = require('browserify');
var vueify = require('vueify');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var del = require('del');
var runseq = require('run-sequence');
var assign = require('lodash.assign');
var fs = require('fs');
var path = require('path');
var argv = require('yargs').argv;
var sass = require('node-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');
var conf = require('./conf');

var widgetTypes = ['launcher', 'messenger', 'chat'];

vueify.compiler.applyConfig({
  customInsertCSS: true,
  customCompilers: {
    scss: function (content, cb, compiler, filePath) {
      sass.render({
        data: content
      }, function (err, res) {
        if (err) {
          cb(err);
        } else {
          var css = res.css.toString();
          var prefixed = postcss([autoprefixer]).process(css).css;
          cb(null, prefixed);
        }
      });
    }
  }
})

var browserifies;
function getBrowserify(path, watch) {
  if (!browserifies) {
    browserifies = {};
    browserifies[true] = {};
    browserifies[false] = {};
  }
  if (typeof watch == 'undefined') watch = false;
  if (browserifies[watch][path]) return browserifies[watch][path];

  var config = assign({}, watchify.args, {
    entries: [path],
    transform: ['vueify']
  });
  var b = watch ? watchify(browserify(config)): browserify(config);
  b.on('log', gutil.log);
  return browserifies[watch][path] = b;
}

function build(folder, filename, watch) {
  process.env.NODE_ENV = argv.prod ? "production" : "development";
  return getBrowserify(path.join(conf.paths.src, folder, filename), watch)
    .bundle()
    .on('error', (err) => {
      console.log(err.message);
      browserSync.notify(err.message, 3000);
      //this.emit('end');
    })
    .pipe(plumber())
    .pipe(source(filename))
    .pipe(buffer())
    //.pipe(babel({presets: ['es2015'], ignore: ['**/node_modules/**']}))
    .pipe(gulp.dest(path.join(conf.paths.dist, folder)));
}

gulp.task('clean', function() {
  return del.sync([conf.paths.dist, conf.paths.publish]);
})

gulp.task('index', () => {
  return gulp.src(path.join(conf.paths.src, '*.html'))
    .pipe(plumber())
    .pipe(gulp.dest(conf.paths.dist));
})

gulp.task('images', function() {
  return gulp.src(path.join(conf.paths.src, '/assets/images/**/*'), { base: conf.paths.src })
    .pipe(plumber())
    .pipe(gulp.dest(conf.paths.dist));
})

gulp.task('build', ['index', 'images'], () => {
  return build('', 'index.vue.js', false);
})

gulp.task('build-watchify', ['index', 'images'], () => {
  return build('', 'index.vue.js', true);
})

gulp.task('rebuild', (cb) => { runseq('clean', 'build', cb); })
