const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function () {
  return gulp
    .src("./src/SCSS/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./public/CSS"));
});

gulp.task("watch", function () {
  gulp.watch("./src/SCSS/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("sass", "watch"));

