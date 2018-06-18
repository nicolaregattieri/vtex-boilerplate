var gulp = require("gulp"),
  watch = require("gulp-watch");

gulp.task("watch", function() {
  watch("./app/**/*.html", function() {
    browserSync.reload();
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });

  watch("./app/assets/images/icons/**/*.svg", function() {
    gulp.start("svgmin");
  });

  watch("./app/assets/scripts/**/*.js", function() {
    gulp.start("scripts");
  });
});
