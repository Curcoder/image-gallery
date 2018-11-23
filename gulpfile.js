const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

// Copy all HTML files to build folder
gulp.task('copyHTML', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
});

// Copy all JS files to build folder
gulp.task('copyJS', () => {
  gulp.src('src/scripts/**/*.js')
    .pipe(gulp.dest('build/scripts'))
});

// Convert all SASS files to CSS with prefixes
gulp.task('sass', () => {
  gulp.src('src/sass/**/*.sass')
    // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('build/css'))
    .pipe(gulp.dest('src/css'))
});

// Copies and minifies images
gulp.task('compyImages', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
);

// Watch for and update all changes
gulp.task('watch', () => {
  gulp.watch('src/sass/**/*.sass', ['sass']);
  gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch('src/scripts/**/*.js', ['copyJS']);
  gulp.watch('src/images/*', ['compyImages']);
});
