var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-ruby-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var svgSprite   = require("gulp-svg-sprites");

// var shell       = require('gulp-shell');
// var clean       = require('gulp-clean');
// var deploy      = require("gulp-gh-pages");


var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build','--config','_config.dev.yml'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build', 'sass'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});


// SVG Icons
gulp.task('svg', ['styleguide-svg'], function () {
    return gulp.src('assets/_svg/*.svg')
      .pipe(svgSprite({
          preview: false, // no preview
          mode: "symbols"    // output SVG data
      }))
      .pipe(gulp.dest("assets/"));
});

// SVG Icons With Preview  - styleguide
gulp.task('styleguide-svg', function () {
    return gulp.src('assets/_svg/*.svg')
      .pipe(svgSprite({
          mode: "symbols"
      }))
      .pipe(gulp.dest("_site/styleguide"));
});

// gulp.task('styleguide', shell.task([
//   'kss-node assets/_scss _site/styleguide --sass --template _template-kss'
// ]));


/**
 * inject bower components
 */
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  // includes dependencies in jekyll include folder
  gulp.src('_site/**/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('_site'));

  // template-kss
  // Also includes the same dependencies in the styleguide main file.
  gulp.src('_template-kss/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('_template-kss/'));

});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src('assets/_scss/*.scss')
    .pipe(sass({
        sourcemapPath: '_site/assets/css',
        require: ['bootstrap-sass']
     }))
    .on('error', browserSync.notify)
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream:true}));
    // .pipe(gulp.dest('_site/assets/css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('assets/_scss/**/*.scss', ['sass']);
    gulp.watch(['index.html', 'assets/js/**/*', 'pages/**/*.html', '_layouts/*.html', '_includes/**/*.html'], ['jekyll-rebuild', 'svg']);
});

/**
 * Default task,
 * running just `gulp` will
 * wireup bower dependecies,
 * compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('serve', ['wiredep', 'browser-sync', 'watch']);
gulp.task('default', ['serve']);
