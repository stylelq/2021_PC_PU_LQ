/*
npm i -D gulp gulp-plumber gulp-connect gulp-ejs-locals gulp-compass gulp-autoprefixer gulp-jshint jshint-stylish gulp-watch gulp-kss gulp-clean
npm i -D gulp-imagemin
npm i -D imagemin-pngquant
npm install browser-sync --save-dev
//src 폴더에 바벨생성
$ echo '{"presets": ["@babel/preset-env"]}' > .babelrc
npm i gulp-babel
*/

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    // compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    ejslocals = require('gulp-ejs-locals'),
    // jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    kss = require('gulp-kss'),
    sourcemaps = require('gulp-sourcemaps');
scss = require('gulp-sass');
browserSync = require('browser-sync').create();
var babel = require("gulp-babel");
var fs = require('fs');

// Path
var src = './public/src';
var dist = './public/dist';
var paths = {scss : (src+'/scss/**/*.{scss,sass}') };




gulp.task('server', ['scss:compile', 'ejs', 'babel', 'imgmin', 'libs'], function () {
    return browserSync.init({
        port : 8000,
        server: {
            baseDir: dist
        }
    });
});

var scssOptions = { /** * outputStyle (Type : String , Default : nested) * CSS의 컴파일 결과 코드스타일 지정 * Values : nested, expanded, compact, compressed */
    outputStyle : "compressed", /** * indentType (>= v3.0.0 , Type : String , Default : space) * 컴파일 된 CSS의 "들여쓰기" 의 타입 * Values : space , tab */
    indentType : "4", /** * indentWidth (>= v3.0.0, Type : Integer , Default : 2) * 컴파일 된 CSS의 "들여쓰기" 의 갯수 */
    indentWidth : 1, // outputStyle 이 nested, expanded 인 경우에 사용 /** * precision (Type : Integer , Default : 5) * 컴파일 된 CSS 의 소수점 자리수. */
    precision: 6, /** * sourceComments (Type : Boolean , Default : false) * 컴파일 된 CSS 에 원본소스의 위치와 줄수 주석표시. */
    sourceComments: false
};
gulp.task('scss:compile', function () {
    return gulp
        // SCSS 파일을 읽어온다.
        .src(paths.scss)
        // 소스맵 초기화(소스맵을 생성)
        .pipe(sourcemaps.init())
        // SCSS 함수에 옵션갑을 설정, SCSS 작성시 watch 가 멈추지 않도록 logError 를 설정
        .pipe(scss(scssOptions).on('error', scss.logError))
        // 위에서 생성한 소스맵을 사용한다.
        .pipe(sourcemaps.write())
        // 목적지(destination)을 설정
        .pipe(gulp.dest(dist + '/css'))
        .pipe(browserSync.reload({stream:true}));
});


// ejs -> HTML
gulp.task('ejs', function() {
    gulp
        .src([src+'/ejs/**/*.ejs',  '!' + src+'/ejs/**/_*.ejs'])
        .pipe(ejslocals(
            {jsonData: JSON.parse(fs.readFileSync(src+'/ejs/index.json'))},
            {ext: '.html'}
        ))
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest(dist+'/html'))
        .pipe(connect.reload())//파일동기화
        .pipe(browserSync.reload({stream:true}));//서버동기화
});


gulp.task("babel", (done) => {
    gulp
        .src([src+'/js/*.js',  '!' + src+'/js/libs/*.js'])
        .pipe(babel())
        .pipe(gulp.dest(dist+'/js'))
    done();
});

// js hint
// gulp.task('js:hint', function () {
// 	gulp
// 		.src([src+'/js/*.js',  '!' + src+'/js/libs/*.js'])
// 		.pipe(jshint())
// 		.pipe(jshint.reporter('jshint-stylish'))
// 		.pipe(gulp.dest(dist+'/js'))
// 		.pipe(browserSync.reload({stream:true}));
// });

// image
gulp.task('imgmin', function() {
    gulp
        .src([src+'/images/**/*.{png,jpg,gif,svg}'])
        // .pipe(imagemin({
        // 	progressive: true,
        // 	interlaced:true,
        // 	use: [pngquant()]
        // }))
        .pipe(gulp.dest(dist+'/images'))
        .pipe(connect.reload())
});

// font
gulp.task('font', function () {
    gulp
        .src([src+'/fonts/**/*'])
        .pipe(gulp.dest(dist+'/fonts'))
});

// library
gulp.task('libs', function () {
    gulp
        .src([src+'/js/libs/**/*'])
        .pipe(gulp.dest(dist+'/js/libs/'))
        .pipe(browserSync.reload({stream:true}));
});

// index
gulp.task('index', function () {
    gulp
        .src([src+'/index.html'])
        .pipe(gulp.dest(dist))
});

//clean 작업 설정

gulp.task('clean', function(){
    return gulp.src([dist+'/*',dist+'/*.html','!' + dist+'/.git'], {read: false})
        .pipe(clean());
});

// Watch task
gulp.task('watch',[], function() {
    watch(src+'/ejs/**/*.ejs', function() {
        gulp.start('ejs');
    });
    watch([src+'/js/*.js',  '!' + src+'/js/libs/*.js'], function() {
        gulp.start('babel');
    });
    watch(src+'/images/**/*.{png,jpg,gif,svg}', function() {
        gulp.start('imgmin');
    });
    //watch(src+'/index.html', function() {
    //	gulp.start('index');
    //});
    watch([src+'/js/libs/**/*', src+'/css/libs/**/*'], function() {
        gulp.start('libs');
    });
    gulp.watch(paths.scss, ['scss:compile']);
});

gulp.task('default', ['server','scss:compile','ejs','babel','imgmin','watch','font','index','libs',]);
