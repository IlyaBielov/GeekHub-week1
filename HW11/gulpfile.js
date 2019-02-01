const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const babel = require('gulp-babel');

gulp.task("sass", () => {
  return gulp.src("src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ["last 2 version"] }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/"));
});

gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/'));
});

gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'html', 'js'], () => {
  gulp.watch("src/scss/**/*.scss", ['sass']);
  gulp.watch("src/index.html", ['html']);
  gulp.watch("src/js/**/*.js", ['js']);
});
