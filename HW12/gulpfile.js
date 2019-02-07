const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');


function typeScript() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
}

gulp.task('default', typeScript);
