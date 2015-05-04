/// <binding Clean='clean-libs, clean-scripts, clean-styles, clean-images' ProjectOpened='watch' />

var gulp = require("gulp"),
    gutil = require("gulp-util"),
    uglify = require('gulp-uglify'),
    sassify = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    browserify = require('browserify'),
    through2 = require('through2'),
    transform = require('vinyl-transform'),
    imagemin = require('gulp-imagemin'),
    rimraf = require("rimraf"),
    vinyl = require("vinyl"),
    fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
    bower: "./bower_components/",
    sass: "./Sass/",
    scripts: "./Scripts/",
    images: "./Images/",
    dest: {
        lib: "./" + project.webroot + "/lib/",
        css: "./" + project.webroot + "/css/",
        images: "./" + project.webroot + "/images/",
        js: "./" + project.webroot + "/js/"
    }
};

gulp.task('clean-libs', function (cb) {
    rimraf(paths.dest.lib, cb);
});

gulp.task('clean-scripts', function (cb) {
    rimraf(paths.dest.js, cb);
});

gulp.task('clean-styles',function(cb) {
    rimraf(paths.dest.css, cb);
});

gulp.task('clean-images', function (cb) {
    rimraf(paths.dest.images, cb);
});

gulp.task("libs", ['clean-libs'], function (cb) {
    var bower = [
        "jquery/dist/jquery.js",
        "angular/angular.js",
        "angular-aria/angular-aria.js",
        "angular-animate/angular-animate.js",
        "angular-material/angular-material.{js,css}",
        "angular-mocks/angular-mocks.js"
    ];

    for (var i = 0; i < bower.length; i++) {
        gulp.src(paths.bower + bower[i])
          .pipe(gulp.dest(paths.dest.lib));
    }
});

gulp.task('scripts', ['clean-scripts'], function () {
    var bundler = function () {
        var b = browserify(),
            stream = through2.obj(function (file, enc, next) {
                b.add(file.path);
                next();
            }, function (next) {
                b.bundle(function (err, src) {
                    stream.push(new vinyl({
                        path: 'bundle.js',
                        contents: src
                    }));
                    next();
                });
            });
        return stream;
    };
    return gulp.src(paths.scripts + '**/*.js')
            .pipe(bundler())
            .pipe(gulp.dest(paths.dest.js))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest(paths.dest.js));
});

gulp.task('styles', ['clean-styles'], function () {
    return gulp.src(paths.sass + '**/*.scss')
        .pipe(sassify())
        .pipe(gulp.dest(paths.dest.css))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(paths.dest.css));
});

gulp.task('images', ['clean-images'], function () {
    return gulp.src(paths.images + '**/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest(paths.dest.images));
});

gulp.task('watch', function () {

    // Watch .js files
    gulp.watch(paths.scripts + '**/*.js', ['scripts']);

    // Watch .scss files
    gulp.watch(paths.sass + '**/*.scss', ['styles']);
    
    // Watch image files
    gulp.watch(paths.images + '**/*', ['images']);
    
    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(["./" + project.webroot + '**']).on('change', livereload.changed);
});