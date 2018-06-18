var gulp = require("gulp"),
  svgmin = require("gulp-svgmin"),
  del = require("del");

gulp.task("svgmin", ["beginClean"], function() {
  return gulp
    .src("./app/assets/images/icons/**/*.svg")
    .pipe(
      svgmin({
        js2svg: {
          pretty: true
        },
        plugins: [
          {
            removeViewBox: false
          },
          {
            removeUselessStrokeAndFill: false
          },
          {
            removeEmptyAttrs: false
          }
        ]
      })
    )
    .pipe(gulp.dest("./app/temp/svgmin"));
});
gulp.task("beginClean", function() {
  return del(["./app/temp/svgmin"]);
});
