'use strict';

/*
|--------------------------------------------------------------------------
| INIT PLUGINS
|--------------------------------------------------------------------------
|
| Инициализация плагинов node.js
|
*/

const babel         = require('gulp-babel');
const changed       = require('gulp-changed');
const concat        = require('gulp-concat');
const connect       = require('gulp-connect');
const cssBase64     = require('gulp-css-base64');
const del           = require('del');
const flatten       = require('gulp-flatten');
const gulp          = require('gulp');
const htmlbeautify  = require('gulp-html-beautify');
const htmlmin       = require('gulp-htmlmin');
const imagemin      = require('gulp-imagemin');
const livereload    = require('gulp-livereload');
const njkRender     = require('gulp-nunjucks-render');
const postcss       = require('gulp-postcss');
const rename        = require("gulp-rename");
const sourcemaps    = require('gulp-sourcemaps');
const uglify        = require('gulp-uglify');
const webpack       = require('webpack');
const webpackStream = require('webpack-stream');

/*
|--------------------------------------------------------------------------
| PROJECT CONFIG
|--------------------------------------------------------------------------
|
| Конфигурация рабочего места, платформы, проекта.
|
*/

// подключение ресурсов проекта
const project = {
    path:'/Applications/MAMP/htdocs/server/',
    images: function () {
        let allImages = [
            'src/assets/forms/images/*.*',
            'src/assets/global/images/*.*',
            'src/assets/grid/images/*.*',
            'src/assets/images/*.*',
            'src/assets/typography/images/*.*',
            'src/partials/**/images/*.*',
        ];
        return allImages;
    },
    video: function () {
        var allVideos = [
            'src/partials/**/video/*.*',
        ];
        return allVideos;
    },
    files: function () {
        var allFiles = [
            'src/partials/**/files/*.*',
        ];
        return allFiles;
    },
    vendorCSS: function () {
        let vendorCSS = [

            // Базовые библиотеки
            'bower_components/normalize-css/normalize.css',
            'bower_components/animate.css/animate.min.css',

            // Дополнительные библиотеки и плагины
            'bower_components/animsition/dist/css/animsition.min.css',
            'bower_components/lightcase/src/css/lightcase.css',
            // 'bower_components/remodal/dist/remodal.css',
            // 'bower_components/remodal/dist/remodal-default-theme.css',
            //'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css',
            // 'bower_components/tipso/src/tipso.min.css',
            // 'bower_components/Swiper/dist/css/swiper.min.css',
            //'bower_components/fluidbox/dist/css/fluidbox.min.css',
            //'bower_components/colorifyjs/styles/colorify.css',
            //'bower_components/legitripple/dist/ripple.min.css',
            // 'bower_components/nstSlider/dist/jquery.nstSlider.min.css',
            // 'bower_components/jquery-selectric/public/selectric.css',
            // 'bower_components/fotorama/fotorama.css',
            'bower_components/formstone/dist/css/themes/light.css',
            'bower_components/formstone/dist/css/upload.css',

        ];
        return vendorCSS;
    },
    appCSS: function () {
        let appCSS = [

            // Стили шаблона
            'src/assets/app/**/*.css',
            'src/assets/grid/**/*.css',
            'src/assets/typography/**/*.css',
            'src/assets/forms/**/*.css',
            'src/partials/**/*.css',
            'src/assets/fonts/**/*.css',
            '!src/**/*example*/*.css',

        ];
        return appCSS;
    },
    vendorJS: function () {
        let vendorJS = [

            // Базовые библиотеки
            'bower_components/vue/dist/vue.js',
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/velocity/velocity.js',
            // 'bower_components/jquery.ba-throttle-debounce.min/index.js',

            // Дополнительные библиотеки и плагины
            // 'bower_components/Swiper/dist/js/swiper.jquery.js',
            // 'bower_components/animsition/dist/js/animsition.js',
            'bower_components/bowser/bowser.js',
            //'bower_components/colorifyjs/scripts/colorify.min.js',
            //'bower_components/fluidbox/dist/js/jquery.fluidbox.min.js',
            //'bower_components/jquery-ias.min/index.js',
            'bower_components/jquery.maskedinput/dist/jquery.maskedinput.min.js',
            //'bower_components/jquery_lazyload/jquery.lazyload.js',
            // 'bower_components/lightcase/src/js/lightcase.js',
            // 'bower_components/packery/dist/packery.pkgd.min.js',
            'bower_components/page-scroll-to-id/jquery.malihu.PageScroll2id.js',
            //'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
            // 'bower_components/remodal/dist/remodal.min.js',
            //'bower_components/list.js/dist/list.min.js',
            'bower_components/tabtab.js/dist/tabtab.min.js',
            // 'bower_components/tipso/src/tipso.min.js',
            'bower_components/wow/dist/wow.min.js',
            //'bower_components/legitripple/dist/ripple.min.js',
            //'bower_components/superplaceholder/dist/superplaceholder.min.js',
            'bower_components/isotope/dist/isotope.pkgd.min.js',
            'bower_components/jquery.accordion/index.js',
            // 'bower_components/theia-sticky-sidebar/js/theia-sticky-sidebar.js',
            // 'bower_components/nstSlider/dist/jquery.nstSlider.min.js',
            // 'bower_components/jquery-selectric/public/jquery.selectric.min.js',
            // 'bower_components/jquery-nicefileinput/jquery.nicefileinput.min.js',
            // 'bower_components/fotorama/fotorama.js',
            // 'bower_components/parallax.js/parallax.min.js',
            // 'bower_components/maphilight/jquery.maphilight.js',
            'bower_components/adaptive.background/src/jquery.adaptive-backgrounds.js',
            'bower_components/formstone/dist/js/core.js',
            'bower_components/formstone/dist/js/upload.js',

            // Плагины для разработки
            'src/assets/dev/jquery.pixlayout.0.9.7.js'

        ];
        return vendorJS;
    },
    appJS: function () {
        let appJS = [

            // Скрипты шаблона
            'src/assets/grid/**/*.js',
            'src/assets/fonts/**/*.js',
            'src/assets/typography/**/*.js',
            'src/assets/forms/**/*.js',
            'src/partials/**/*.js',
            'src/assets/app/**/*.js',
            '!src/partials/app.js',
            '!src/**/*example*/*.js',

        ];
        return appJS;
    }
}


// конфигурация плагинов проекта
const config = {
    connect: {
        root: 'dist',
        livereload: true
    },
    del: {
        force: true
    },
    postcss: [
        require('postcss-cssnext')({
            browsers: ['> 2%'],
            strict:   false
        }),
    ],
    postcssBuild: [
        require('postcss-cssnext')({
            browsers: ['> 2%']
        }),
        require('cssnano')({
            discardComments: {
                removeAll: true
            },
            safe:         true,
            autoprefixer: false,
            zindex:       false,
        }),
    ],
    cssBase64: {
        maxWeightResource: 5000
    },
    njkRender: {
        path: './src/'
    },
    babel: {
        "presets": [
            ["latest", {
                "es2015": {
                    "modules": false
                }
            }]
        ],
        compact: false
    },
    htmlmin: {
        collapseWhitespace: true,
        removeComments:     true
    },
    htmlBeautify: {
        "indent_size":                 4,
        "indent_char":                 " ",
        "eol":                         "\n",
        "indent_level":                0,
        "indent_with_tabs":            false,
        "preserve_newlines":           true,
        "max_preserve_newlines":       0,
        "jslint_happy":                false,
        "space_after_anon_function":   false,
        "brace_style":                 "collapse",
        "keep_array_indentation":      false,
        "keep_function_indentation":   false,
        "space_before_conditional":    true,
        "break_chained_methods":       false,
        "eval_code":                   false,
        "unescape_strings":            false,
        "wrap_line_length":            0,
        "wrap_attributes":             "auto",
        "wrap_attributes_indent_size": 4,
        "end_with_newline":            false
    },
    uglify: {
        compress: {
            drop_console: true
        }
    }

}

// наборы gulp тасков
gulp.task('default', [
    // 'del--temp',
    // 'connect',
    'htm',
    'css--vendor',
    'css--app',
    'js--vendor',
    'js--webpack',
    'fonts',
    'icons',
    'images',
    'video',
    'files',
    'root',
    'watch'
]);
gulp.task('build', [
    // 'connect',
    'htm--build',
    'css--base64',
    'js--build--vendor',
    'js--build--webpack',
    'fonts',
    'icons',
    'video',
    'files',
    'root'
]);

/*
|--------------------------------------------------------------------------
| CONNECT
|--------------------------------------------------------------------------
|
| Запуск локального сервера
|
*/

// gulp.task('connect', function () {
//     connect.server({
//         root:       'dist',
//         livereload: true
//     });
// });


/*
|--------------------------------------------------------------------------
| DEL
|--------------------------------------------------------------------------
|
| Удаление файлов из директории сборки.
|
*/

gulp.task('del', function () {
    return del(['dist/**/*'], config.del).then(paths => {
        console.log('Удалены файлы и папки:\n', paths.join('\n'));
    });
});
gulp.task('del--temp', function () {
    return del(['./src/partials/app.js'], config.del).then(paths => {
        console.log('Удалены файлы и папки:\n', paths.join('\n'));
    });
});

/*
|--------------------------------------------------------------------------
| CSS
|--------------------------------------------------------------------------
|
| Сбор всех CSS файлов в 1
|
| !!! Плагин sourcemaps не работает в связке с csscomb
|
*/

// собираем все стили в 1 файл
gulp.task('css--vendor', function () {

    let srcPath  = project.vendorCSS();
    let distPath = 'dist/assets/styles/';

    return gulp.src(srcPath)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.css'))
        .pipe(postcss(config.postcss))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});

gulp.task('css--app', function () {

    let srcPath  = project.appCSS();
    let distPath = 'dist/assets/styles/';

    return gulp.src(srcPath)
        .pipe(sourcemaps.init())
        .pipe(concat('app.css'))
        .pipe(postcss(config.postcss))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});

// собираем все стили в 1 файл (после отработки таска по минификации изображений)
gulp.task('css--build--vendor', function () {

    let srcPath  = project.vendorCSS();
    let distPath = 'dist/assets/styles/';

    return gulp.src(srcPath)
        .pipe(concat('vendor.css'))
        .pipe(postcss(config.postcssBuild))
        .pipe(gulp.dest(distPath));

});
gulp.task('css--build--app'/*, ['images--build']*/, function () {

    let srcPath  = project.appCSS();
    let distPath = 'dist/assets/styles/';
    let projectPath = project.path + '/assets/styles/';

    return gulp.src(srcPath)
        .pipe(concat('app.css'))
        .pipe(postcss(config.postcssBuild))
        .pipe(gulp.dest(distPath))
        .pipe(gulp.dest(projectPath));

});

// base64 кодирование изображений, использующихся в стилях (после отработки таска по сборке стилей)
gulp.task('css--base64', ['css--build--vendor','css--build--app', 'images--build'], function () {

    let distPath = 'dist/assets/styles/';

    return gulp.src(distPath + 'app.css')
        .pipe(cssBase64(config.cssBase64))
        .pipe(gulp.dest(distPath));
});


/*
|--------------------------------------------------------------------------
| HTM
|--------------------------------------------------------------------------
|
| Сборка .htm файлов.
| Используется шаблонизатор Nunjucks
|
*/

// собираем элементы шаблонизатора в .html страницы
gulp.task('htm', function () {

    var srcPath  = 'src/pages/**/*.htm';
    var distPath = 'dist/pages/';

    // подставляем данные в шаблонизатор и рендерим
    return gulp.src(srcPath)
        .pipe(njkRender(config.njkRender))
        .pipe(htmlbeautify(config.htmlBeautify))
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});

// собираем и минифицируем элементы шаблонизатора в .html страницы
gulp.task('htm--build', function () {

    var srcPath  = 'src/pages/**/*.htm';
    var distPath = 'dist/pages/';

    // подставляем данные в шаблонизатор и рендерим
    return gulp.src(srcPath)
        .pipe(njkRender(config.njkRender))
        //.pipe(htmlmin(config.htmlmin))
        .pipe(htmlbeautify(config.htmlBeautify))
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});

/*
|--------------------------------------------------------------------------
| JS
|--------------------------------------------------------------------------
|
| Сбор всех JS файлов в 1
|
*/

// собираем все скрипты в 1 файл
gulp.task('js--vendor', function () {

    let srcPath  = project.vendorJS();
    let distPath = 'dist/assets/scripts/';

    return gulp.src(srcPath)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});
gulp.task('js--app', function () {

    let srcPath  = project.appJS();
    let tempPath = 'src/partials/';
    let distPath = 'dist/assets/scripts/';

    return gulp.src(srcPath)
        .pipe(concat('app.js'))
        .pipe(babel(config.babel))
        .pipe(gulp.dest(tempPath));

});
gulp.task('js--webpack', ['js--app'], function () {

    setTimeout(function() {

        let srcPath  = project.appJS();
        let tempPath = 'src/partials/';
        let distPath = 'dist/assets/scripts/';

        return gulp.src(tempPath + 'app.js')
            .pipe(sourcemaps.init())
            .pipe(webpackStream(require('./webpack.config.js') , webpack))
            .pipe(sourcemaps.write('./'))
            .pipe(rename("app.js"))
            .pipe(gulp.dest(distPath))
            .pipe(livereload());

    }, 1000);

});
// собираем все скрипты в 1 файл и минифицируем
gulp.task('js--build--vendor', function () {

    let srcPath  = project.vendorJS();
    let distPath = 'dist/assets/scripts/';

     return gulp.src(srcPath)
        .pipe(concat('vendor.js'))
        .pipe(uglify(config.uglify))
        .pipe(gulp.dest(distPath));

});
gulp.task('js--build--webpack', ['js--app'], function () {

    setTimeout(function() {

        let srcPath  = project.appJS();
        let tempPath = 'src/partials/';
        let distPath = 'dist/assets/scripts/';

        return gulp.src(tempPath + 'app.js')
            .pipe(sourcemaps.init())
            .pipe(webpackStream(require('./webpack.config.js') , webpack))
            .pipe(sourcemaps.write('./'))
            .pipe(rename("app.js"))
            .pipe(uglify(config.uglify))
            .pipe(gulp.dest(distPath))
            .pipe(livereload());

    }, 5000);

});
/*
|--------------------------------------------------------------------------
| FONTS
|--------------------------------------------------------------------------
|
| Работа с шрифтами.
|
*/

// перебрасываем все шрифты в директорию сборки
gulp.task('fonts', function () {

    let srcPath = [
        'src/assets/fonts/**/*.*',
        '!src/assets/fonts/*.css'
    ];
    let distPath = 'dist/assets/fonts/';

    return gulp.src(srcPath)
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});

/*
|--------------------------------------------------------------------------
| ICONS
|--------------------------------------------------------------------------
|
| Работа с иконками.
|
*/

// перебрасываем все иконки приложения в директорию сборки
gulp.task('icons', function () {

    let srcPath  = 'src/assets/icons/*.*';
    let distPath = 'dist/assets/icons/';

    return gulp.src(srcPath)
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});

/*
|--------------------------------------------------------------------------
| IMAGES
|--------------------------------------------------------------------------
|
| Работа с изображениями.
|
*/

// перебрасываем все изображения в директорию сборки
gulp.task('images', function () {

    let srcPath  = project.images();
    let distPath = 'dist/assets/images/';

    return gulp.src(srcPath)
        .pipe(flatten())
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});

// минифицируем изображения и перебрасываем в директорию сборки
gulp.task('images--build', function () {

    let srcPath  = project.images();
    let distPath = 'dist/assets/images/';

    return gulp.src(srcPath)
        .pipe(flatten())
        .pipe(imagemin())
        .pipe(gulp.dest(distPath));

});

/*
|--------------------------------------------------------------------------
| VIDEO
|--------------------------------------------------------------------------
|
| Перенос видео.
|
*/

// перебрасываем все видео в директорию сборки
gulp.task('video', function () {

    let srcPath = project.video();
    let distPath = 'dist/assets/video/';

    return gulp.src(srcPath)
        .pipe(flatten())
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});

/*
|--------------------------------------------------------------------------
| FILES
|--------------------------------------------------------------------------
|
| Перенос с файлами, такими как документы, архивы и прочее.
|
*/

// перебрасываем все видео в директорию сборки
gulp.task('files', function () {

    let srcPath = project.files();
    let distPath = 'dist/assets/files/';

    return gulp.src(srcPath)
        .pipe(flatten())
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});
/*
|--------------------------------------------------------------------------
| ROOT
|--------------------------------------------------------------------------
|
| Работа с корневыми файлами темы.
|
*/

// все файлы из корня и .php скрипты (кроме инстументов разработки) перебрасываем в директорию сборки
gulp.task('root', function () {

    let srcPath = [
        '!src/assets/dev/**.*',
        'src/**/*.php',
        'src/*.*'
    ];
    let distPath = 'dist/';

    return gulp.src(srcPath)
        .pipe(gulp.dest(distPath))
        .pipe(livereload());

});

/*
|--------------------------------------------------------------------------
| WATCH
|--------------------------------------------------------------------------
|
| Отслеживание изменений во всех файлах проекта.
|
*/

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(project.appCSS(), ['css--app']);
    gulp.watch('src/**/*.htm', ['htm','js--webpack']);
    gulp.watch(project.appJS(), ['js--webpack']);
    gulp.watch(project.images(), ['images']);
    gulp.watch(project.video(), ['video']);
    gulp.watch(project.files(), ['files']);
    gulp.watch('src/*.*', ['root']);
});