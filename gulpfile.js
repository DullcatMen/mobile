var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require("gulp-uglify");

var paths = {
  stylus: ['./dev/media/stylus/*.styl'],
};
var paths2 = {
  stylus: ['./dev/em-rem/stylus/*.styl'],
};
var paths5 = {
  stylus: ['./dev/event/stylus/*.styl'],
};
var paths4 = {
  script: ["./dev/event/js/*.js"],
};

//banner
var paths6 = {
  script: ["./dev/banner/js/*.js"],
};
var paths7 = {
  stylus: ["./dev/banner/stylus/*.styl"],
};

gulp.task('stylus-1', function() {
  return gulp.src(paths.stylus)
      .pipe(stylus({
      	compress: 1
    }))
    .pipe(gulp.dest('./pro/media/css'));
});
gulp.task('stylus-2', function() {
  return gulp.src(paths2.stylus)
      .pipe(stylus({
      	compress: 1
    }))
    .pipe(gulp.dest('./pro/em-rem/css'));
});
gulp.task('stylus-3', function() {
  return gulp.src(paths5.stylus)
      .pipe(stylus({
        compress: 1
    }))
    .pipe(gulp.dest('./pro/event/css'));
});

gulp.task("script",function(){
  return gulp.src(paths4.script)
    // .pipe(uglify())
    .pipe(gulp.dest("./pro/event/js"));
});

//banner
gulp.task("script-2",function(){
  return gulp.src(paths6.script)
    // .pipe(uglify())
    .pipe(gulp.dest("./pro/banner/js"));
});
gulp.task('stylus-4', function() {
  return gulp.src(paths7.stylus)
      .pipe(stylus({
        compress: 1
    }))
    .pipe(gulp.dest('./pro/banner/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus-1']);
});
gulp.task('watch', function() {
  gulp.watch(paths2.stylus, ['stylus-2']);
});
gulp.task('watch-1', function() {
  gulp.watch(paths5.stylus, ['stylus-3']);
});
gulp.task('watch', function() {
  gulp.watch(paths4.script, ['script']);
});

//banner
gulp.task('watch-2', function() {
  gulp.watch(paths7.stylus, ['stylus-4']);
});
gulp.task('watch-3', function() {
  gulp.watch(paths6.script, ['script-2']);
});

gulp.task('default', ['watch', "watch-1", "watch-2", "watch-3", 'stylus-1', 'stylus-2', 'stylus-3', 'stylus-4', "script", "script-2"]);