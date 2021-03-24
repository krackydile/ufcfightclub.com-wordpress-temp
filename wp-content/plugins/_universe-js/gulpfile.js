var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
var derequire = require('gulp-derequire');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var http = require('http');
var browserstack = require('browserstack-local');

var config = require('./test/config');

gulp.task('default', ['build']);

gulp.task('build', function() {
  return gulp
    .src('./index.js')
    .pipe(browserify({standalone: 'Universe'}))
    .pipe(derequire())
    .pipe(rename('universe.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('test', function(callback) {
  runSequence(
    ['build-browser-test', 'start-test-server', 'start-browserstack-local'],
    'run-node-test',
    'run-browser-test',
    function() {
      runSequence(
        ['stop-test-server', 'stop-browserstack-local'],
        callback);
    }
  );
});

gulp.task('node-test', function(callback) {
  runSequence(
    'start-test-server',
    'run-node-test',
    function() {
      runSequence(
        'stop-test-server',
        callback);
    }
  );
});

gulp.task('browser-test', function(callback) {
  runSequence(
    ['build-browser-test', 'start-test-server', 'start-browserstack-local'],
    'run-browser-test',
    function() {
      runSequence(
        ['stop-test-server', 'stop-browserstack-local'],
        callback);
    }
  );
});

gulp.task('test-server', function(callback) {
  runSequence(
    ['build-browser-test', 'start-test-server'],
    callback);
});

// TASKS

gulp.task('build-browser-test', function(callback) {
  runSequence(
    ['build-browser-unit-test', 'build-browser-functional-test'],
    callback);
});

gulp.task('build-browser-unit-test', function() {
  return gulp
    .src('./test/test.js')
    .pipe(browserify())
    .pipe(gulp.dest('./test/browser'));
});

gulp.task('build-browser-functional-test', function() {
  return gulp
    .src('./test/tests/functional.js')
    .pipe(browserify())
    .pipe(gulp.dest('./test/browser'));
});

var test_server;
gulp.task('start-test-server', function(callback) {
  test_server = http
    .createServer(config.routes)
    .listen(config.port, function() {
      gutil.log('Test server started on', gutil.colors.green(config.host));
      gutil.log('Run unit tests on', gutil.colors.green(config.testPage));
      gutil.log('Run functional tests on', gutil.colors.green(config.functionalTestPage));
      callback();
    });
});

gulp.task('stop-test-server', function(callback) {
  test_server.close(callback);
});

var bs_local;
gulp.task('start-browserstack-local', function(callback) {
  bs_local = new browserstack.Local();
  var bs_local_args = {'key': 'TODO', force: true, verbose: true};
  bs_local.start(bs_local_args, function(err) {
    if (!err) gutil.log('Started BrowserStackLocal');
    callback(err);
  });
});

gulp.task('stop-browserstack-local', function(callback) {
  bs_local.stop(callback);
});

gulp.task('run-node-test', function(callback) {
  gulp
    .src('./test/test.js', {read: false})
    .pipe(mocha())
    .on('end', callback)
    .on('error', function() {});
});

gulp.task('run-browser-test', function(callback) {
  gulp
    .src('./test/browser-test.js', {read: false})
    .pipe(mocha({timeout: 60000}))
    .on('end', callback)
    .on('error', function() {});
});
