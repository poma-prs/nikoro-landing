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
var inject = require('gulp-inject');
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
  return getBrowserify(path.join(conf.paths.src, folder, filename + '.js'), watch)
    .bundle()
    .on('error', (err) => {
      console.log(err.message);
      browserSync.notify(err.message, 3000);
      //this.emit('end');
    })
    .pipe(plumber())
    .pipe(source(filename + '-' + Math.floor(Math.random() * 100000) + '.js'))
    .pipe(buffer())
    //.pipe(babel({presets: ['es2015'], ignore: ['**/node_modules/**']}))
    .pipe(gulp.dest(path.join(conf.paths.dist, folder)));
}

gulp.task('clean', function() {
  return del.sync([conf.paths.dist, conf.paths.publish]);
})

gulp.task('browserify', () => {
  return build('', 'index.vue', false);
});

gulp.task('watchify', () => {
  return build('', 'index.vue', true);
});

gulp.task('index', () => {
  return gulp.src(path.join(conf.paths.src, '*.html'))
    .pipe(plumber())
    .pipe(inject(gulp.src(path.join(conf.paths.dist, '**/*.js')), {
      transform: function(filepath, file, i, length, targetFile) {
        filepath = filepath.slice(
          filepath.indexOf(conf.paths.dist) + conf.paths.dist.length);
        return inject.transform.apply(inject.transform, [filepath, file, i, length, targetFile]);
      }
    }))
    .pipe(gulp.dest(conf.paths.dist));
})

gulp.task('images', ['clean'], function() {
  return gulp.src(path.join(conf.paths.src, '/assets/images/**/*'), { base: conf.paths.src })
    .pipe(plumber())
    .pipe(gulp.dest(conf.paths.dist));
})

gulp.task('php', ['clean'], () => {
  return gulp.src([path.join(conf.paths.src, '*.php')])
    .pipe(plumber())
    .pipe(gulp.dest(conf.paths.dist));
})

gulp.task('other', ['clean'], () => {
  return gulp.src([path.join(conf.paths.src, 'favicon.ico'),
      path.join(conf.paths.src, '.htaccess'),
      path.join(conf.paths.src, 'robots.txt'),
      path.join(conf.paths.src, 'sitemap.xml')])
    .pipe(plumber())
    .pipe(gulp.dest(conf.paths.dist));
})

gulp.task('build', ['images', 'php', 'other'], (cb) => {
  runseq('browserify', 'index', cb);
})

gulp.task('minify', ['build'], function() {
  return gulp.src(path.join(conf.paths.dist, '**/*.js'))
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(conf.paths.publish));
})

gulp.task('build-prod', ['minify'], () => {
  process.env.NODE_ENV = "production";
  return gulp.src([
      path.join(conf.paths.dist, '**/*'),
      '!' + path.join(conf.paths.dist, '**/*.js'),
      path.join(conf.paths.dist, '.htaccess')])
    .pipe(gulp.dest(conf.paths.publish));
})

gulp.task('build-watchify', ['images', 'php', 'other'], (cb) => {
  runseq('watchify', 'index', cb);
})

gulp.task('rebuild', (cb) => { runseq('clean', 'build', cb); })
