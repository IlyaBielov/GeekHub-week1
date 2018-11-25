const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function() {
  return gulp.src("scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ["last 2 version"] }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"));
});

gulp.task('watch', ["sass"], function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
});

