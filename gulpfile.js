var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var cleancss = require('gulp-clean-css');

gulp.task('scripts', function() {
    return gulp.src(['app/app.js',
      'app/components/version/version.js',
      'app/components/version/version-directive.js',
      'app/components/version/interpolate-filter.js',
      'app/pr0texter/pr0texter.js',
      'app/about/about.js',
      'app/**/*.js', 
      
      '!app/bower_components/**.*',
      '!app/js/**/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts-nominify', function() {
    return gulp.src(['app/app.js',
      'app/components/version/version.js',
      'app/components/version/version-directive.js',
      'app/components/version/interpolate-filter.js',
      'app/pr0texter/pr0texter.js',
      'app/about/about.js',
      'app/**/*.js', 
      
      '!app/bower_components/**.*',
      '!app/js/**/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-libraries', function() {
  return gulp.src(['app/js/**/*.*',
    'app/bower_components/**/*.*'])
  .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-css-tmp', function() {
  return gulp.src(['app/**/*.css',
      '!app/components/**/*.*',
      '!app/node_modules/**/*.*',
      '!app/assets/**/*.*'])
    .pipe(gulp.dest('tmp'));
})

gulp.task('copy-css', ['copy-css-tmp'], function() {
  return gulp.src('tmp/**/*.css')
    .pipe(gulp.dest('dist'));
})

gulp.task('copy-images', function() {
	return gulp.src('app/img/*.*')
	.pipe(gulp.dest('dist/img'));
});

gulp.task('minify-html', function() {
  return gulp.src('app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-html', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', ['copy-css-tmp'], function() {
  return gulp.src('tmp/**/*.css')
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('compile', ['scripts', 'copy-images', 'copy-libraries','minify-html', 'minify-css'], function() {

});

gulp.task('compile-debug', ['scripts-nominify', 'copy-images', 'copy-libraries', 'copy-html', 'copy-css'], function() {

});