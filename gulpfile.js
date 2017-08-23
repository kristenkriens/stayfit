var gulp   = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		imageMin = require('gulp-imagemin'),
		minifyCSS = require('gulp-minify-css'),
		notify = require('gulp-notify'),
		plumber = require('gulp-plumber'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		uglify = require('gulp-uglify'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;

gulp.task('bs', function() {
	browserSync.init({
		// if running on windows, change this to http://localhost
		server: './'
	});
});

gulp.task('styles', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe(plumber({
		  errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(concat('styles.css'))
		.pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
		.pipe(reload({stream:true}));
});

gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(plumber({
		  errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(reload({stream:true}));
});

gulp.task('images', function() {
	return gulp.src('src/images/**/*')
		.pipe(imageMin())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.scss', ['styles']);
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('*.html', reload);
});

gulp.task('default', ['styles', 'scripts', 'images', 'fonts', 'bs', 'watch']);
