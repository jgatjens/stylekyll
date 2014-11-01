var gulp        = require('gulp');
var browserSync = require('browser-sync');
var cp          = require('child_process');
var $           = require('gulp-load-plugins')();

var config = {
  dest: '_site',
  assetsFolder: 'assets',
  messages: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (cb) {
  browserSync.notify(config.messages);
  return cp.spawn('jekyll', ['build','--config','_config.dev.yml'], {stdio: 'inherit'})
    .on('close', cb);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['styles', 'jekyll-build'], function (cb) {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
*/
gulp.task('browser-sync', ['styles', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: config.dest
    }
  });
});


// SVG Icons
gulp.task('svg', function () {
    return gulp.src(config.assetsFolder + '/_svg/*.svg')
      .pipe($.svgSprites({
          preview: false, // no preview
          mode: 'symbols'    // output SVG data
      }))
      .pipe(gulp.dest(config.assetsFolder));
});

// SVG Icons With Preview  - styleguide
gulp.task('svg-kss', function () {
    return gulp.src(config.assetsFolder + '/_svg/*.svg')
      .pipe($.svgSprites({
          mode: 'symbols'
      }))
      .pipe(gulp.dest(config.dest + '/styleguide'));
});


/**
 * inject bower components
 */
var wiredep = require('wiredep').stream;
gulp.task('wiredep', function () {

  // includes dependencies in jekyll include folder
  // copy manualy and replace it with {{page.relative}}
  // until we find the way to make it
  gulp.src('_includes/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('_includes'));

  // template-kss
  // Also includes the same dependencies in the styleguide main file.
  gulp.src('_template-kss/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('_template-kss/'));

});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('styles', function () {
  return gulp.src(config.assetsFolder + '/_scss/*.scss')
    .pipe($.rubySass({
        require: ['bootstrap-sass']
     }))
    .pipe($.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest(config.dest + '/'+ config.assetsFolder + '/css'))
    .pipe(browserSync.reload({stream:true}));
});

/**
 * Watch scss files for changes & recompile
 */
gulp.task('watch', function () {
    gulp.watch(config.assetsFolder + '/_scss/**/*.scss', ['styles']);
    gulp.watch(['index.html', config.assetsFolder + '/js/**/*', 'pages/**/*.html', '_layouts/*.html', '_includes/**/*.html'], ['jekyll-rebuild']);
});

/**
 * Default task,
 * running just `gulp` will
 * wireup bower dependecies,
 * compile the sass,
 */

gulp.task('serve', ['browser-sync', 'watch']);
gulp.task('default', ['serve']);
