/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<section class=advantages> <div class=advantages__content-wrap> <ul class=advantages__nav> <li class=\"advantages__nav-item advantages__nav-item--1\">Быстрый запуск</li> <li class=\"advantages__nav-item advantages__nav-item--2\">гарантия сроков</li> <li class=\"advantages__nav-item advantages__nav-item--3\">оплата</li> <li class=\"advantages__nav-item advantages__nav-item--4\">наш подход</li> <li class=\"advantages__nav-item advantages__nav-item--5\">адаптивность</li> <li class=\"advantages__nav-item advantages__nav-item--6\">исходники</li> </ul> <div class=advantages__tabs-wrap> <advantages-tab promo-title=\"Быстрый запуск работ\" promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> <advantages-tab promo-title=\"Быстрый запуск работ\" promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> <advantages-tab promo-title=\"Быстрый запуск работ\" promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> <advantages-tab promo-title=\"Быстрый запуск работ\" promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> <advantages-tab promo-title=\"Быстрый запуск работ\" promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> <advantages-tab promo-title=\"Быстрый запуск работ\" promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> </div> </div> </section> ";

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<figure class=advantages__tab> <div class=advantages__tab-container> <div class=advantages__tab-promo> <p class=advantages__tab-promo-title>[[ promoTitle ]]</p> <p class=advantages__tab-promo-text>[[ promoText ]]</p> </div> <figcaption class=advantages__tab-content v-html=content></figcaption> </div> </figure> ";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<section class=experience></section>";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<section class=faq> <header class=faq__title>Краткий FAQ</header> <ul class=faq__list data-accordion-group> <li class=faq__list-item v-for=\"item in faq.items\" data-accordion> <p class=faq__list-item-title data-control>[[ item.title ]]</p> <figure class=faq__list-item-content-wrap data-content> <figcaption class=faq__list-item-content>[[ item.text ]]</figcaption> </figure> </li> </ul> </section>";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<form class=form-order action=/assets/forms/send-form.php :title=\"'Заказать лендинг с адреса: ' + location\" data-form> <header class=form-order__title>Заказать лендинг</header> <p class=form-order__subtitle>Оставьте Ваш номер телефона и мы перезвоним:</p> <figure class=\"form-order__items-wrap form-order__items-wrap--order\"> <div class=form-order__fields> <label for=\"\" class=form-order__label>Ваше имя:</label> <input type=text class=form-order__input name=ff1 placeholder=\"Введите ваше имя\"> <label for=\"\" class=form-order__label>Номер телефона*:</label> <input type=text class=form-order__input placeholder=\"+7 (495) 000-00-00\" name=ff2 data-form-phone-field required> <p class=form-order__status data-form-status></p> </div> <figcaption class=form-order__caption> <p class=form-order__caption-title>тариф:</p> <p class=form-order__plan>[[ plan ]]</p> <p class=form-order__plan-description>[[ planDescription ]]</p> <p class=form-order__cost> от <br>[[ cost ]] руб. </p> </figcaption> <button class=form-order__order data-form-btn>Оформить заказ</button> </figure> <figure class=\"form-order__items-wrap form-order__items-wrap--success\"> <header class=form-order__success-title>Спасибо за ваш заказ!</header> <p class=form-order__success-subtitle>Мы перезвоним вам в самое ближайшее время!</p> <a href=tel:+74959899857 class=form-order__success-phone>+7 (495) 989-98-57</a> </figure> </form>";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<form class=form-question action=/assets/forms/send-form.php :title=\"'Остались вопросы? с адреса: ' + location\" data-form> <figure class=form-question__success> <p class=\"form-question__title form-question__title--success\">Спасибо за ваше обращение</p> <p class=\"form-question__subtitle form-question__subtitle--success\">Мы перезвоним вам в самое ближайшее время!</p> </figure> <p class=form-question__title>Остались вопросы?</p> <p class=form-question__subtitle>Оставьте Ваш номер телефона и мы перезвоним с бесплатной консультацией:</p> <div class=form-question__input-wrap> <input type=text class=form-question__input placeholder=\"+7 (495) 000-00-00\" name=ff1 required data-form-phone-field> <button data-form-btn class=form-question__button></button> </div> <p data-form-status class=form-question__status>Статус отправки</p> <p class=form-question__description>Или звоните нам по номеру +7 (495) 989-98-57</p> </form>";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<transition name=lightbox--animation-> <section class=lightbox @click.self=\"$emit('close')\"> <figure class=lightbox__container> <button class=lightbox__close @click=\"$emit('close')\"></button> <slot name=lightbox__container>Содержимое лайтбокса</slot> </figure> </section> </transition>";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<header class=promo> <div class=promo__content-wrap> <div class=promo__header> <a href=/ class=promo__logo></a> <nav class=promo__menu> <a href=# class=promo__menu-item>О нас</a> <a href=# class=promo__menu-item>аутсорсинг</a> <a href=# class=promo__menu-item>портфолио</a> <a href=# class=promo__menu-item>контакты</a> </nav> </div> <div class=promo__container> <div class=promo__content> <h1 class=promo__title>Качественная и&nbsp;быстрая верстка ваших дизайн-макетов</h1> <p class=promo__subtitle>Превратим ваши psd/sketch макеты в структурированный набор html/css файлов. Сохраним pixel-perfect, прикрутим анимацию.</p> <div class=promo__items-wrap> <figure class=promo__item> <div class=\"promo__item-icon promo__item-icon--1\"></div> <figcaption class=promo__item-caption>sketch</figcaption> </figure> <figure class=promo__item> <div class=\"promo__item-icon promo__item-icon--2\"></div> <figcaption class=promo__item-caption>photoshop</figcaption> </figure> </div> <button type=button class=promo__order>заказать верстку</button> <a href=#quality class=promo__readmore>смотреть примеры работ</a> </div> <div class=promo__image-wrap> <img src=/assets/images/promo-2.jpg alt=\"\" class=\"promo__image promo__image--1 wow promoImage\"> <img src=/assets/images/promo-3.jpg alt=\"\" class=\"promo__image promo__image--2 wow promoImage\"> </div> </div> </div> </header>";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<section class=quality></section>";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<footer class=site-footer> <div class=site-footer__content-wrap> <div class=site-footer__form-question-wrap> <form-question></form-question> </div> <div class=site-footer__faq-wrap> <faq></faq> </div> </div> <hr class=site-footer__hr> <div class=site-footer__content-wrap> <a href=mailto:hello.krown.cc class=site-footer__email>HELLO@KROWN.CC</a> <span class=site-footer__city>Севастополь</span> <a href=tel:+74959899857 class=site-footer__phone>+7 (495) 989-98-57</a> </div> </footer>";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


jQuery(document).ready(function ($) {

    //images padding
    $('.typography img').each(function () {
        if ($(this).css('float') == 'left') {
            $(this).css({
                marginRight: '1em'
            });
        } else if ($(this).css('float') == 'right') {
            $(this).css({
                marginLeft: '1em'
            });
        }
    });

    //remove empty <p> tags
    $('.typography p').filter(function () {
        return $.trim($(this).text()) === '' && $(this).children().length == 0;
    }).remove();

    //srcollable tables
    function srcollableTables() {
        $('.typography table').each(function () {
            if ($(this).width() >= $(window).width() - $('.js-sticky-sidebar').width()) {
                $(this).css({
                    display: 'block'
                });
            } else {
                $(this).css({
                    display: 'table'
                });
            }
        });
    }
    srcollableTables();
    $(window).resize(function () {
        srcollableTables();
    });
});
document.addEventListener('DOMContentLoaded', function () {

    /*
    |--------------------------------------------------------------------------
    | SEND FORM
    |--------------------------------------------------------------------------
    |
    | Валидация полей и отправка формы
    |
    */

    // кастомизация селекта
    $('[data-form] select').selectric();

    // устанока маски на поля
    $('[data-form-phone-field]').mask("+7 (999) 999-99-99");
    $('[data-form-time-field]').mask("99:99");

    $('[data-form-btn]').click(function () {
        var $b = $(this);
        var $f = $(this).parents('[data-form]');
        var $s = $f.find('[data-form-status]');
        var data = {};

        var action = $f.attr('action') || '/assets/forms/send-form.php';
        var senderUrl = location.href;

        // узнаем адрес получателя и цели метрики каждой формы
        var mailAddr = "ljazzmail@gmail.com";
        var reachGoalTarget = $f.attr('data-form-target');

        var bVal = $b.text();

        var status = ['Пожалуйста, укажите номер телефона', 'Спасибо, сообщение отправлено', 'При отправке сообщения возникли проблемы. Пожалуйста, отправьте письмо на ящик ' + mailAddr];

        // тряска формы если не проходим валидацию при отправке
        $f.find('*[required]').each(function () {
            $(this).removeAttr('data-form-field-invalid');
            if ($(this).val() == '' || $(this).val() == $(this).attr('placeholder')) {
                $(this).attr('data-form-field-invalid', '');
                $f.find('[data-form-field-invalid]').addClass('shake animated');
                setTimeout(function () {
                    $f.find('[data-form-field-invalid]').removeClass('shake animated');
                }, 1000);
            }
        });

        // если есть поля с ошибками то сообщаем об этом пользователю
        if ($f.find('[data-form-field-invalid]').length) {
            $s.html(status[0]).slideDown(500);
            return false;
        }

        // собираем содержимое полей
        $f.find('input, textarea, select').each(function (i) {
            var name = $(this).attr('name');
            var label = $(this).attr('placeholder') || $(this).prev().html();
            label = $.trim(label.replace(/[:*]/g, ''));
            data[name] = {
                label: label,
                value: $(this).val()
            };
        });

        // отправка формы
        $.ajax({
            url: action,
            type: 'POST',
            data: {
                send: 'do',
                to: mailAddr,
                subj: $f.attr('title'),
                data: data,
                senderUrl: senderUrl
            },
            beforeSend: function beforeSend() {
                $b.text('Отправка...');
            },
            success: function success(response) {
                var r = parseInt(response);

                $b.text(bVal);
                $s.html(status[r]).slideDown(500);

                if (r == 1) {
                    $f.attr('data-form-success', '');
                    $f.find('input, textarea, select').val('');

                    //yaCounter41432709.reachGoal(reachGoalTarget);
                }
            },
            error: function error(jqXHR, textStatus, ex) {
                alert(textStatus + "," + ex + "," + jqXHR.responseText);
            }
        });
        return false;
    });
});
Vue.component('advantages-tab', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(1),
    props: ['promoTitle', 'promoText', 'content']
});

Vue.component('advantages', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(0),
    mounted: function mounted() {
        $('.advantages').tabtab({
            tabMenu: '.advantages__nav', // direct container of the tab menu items
            tabContent: '.advantages__tabs-wrap', // direct container of the tab content items

            startSlide: 1, // starting slide on pageload
            arrows: true, // keyboard arrow navigation
            dynamicHeight: true, // if true the height will dynamic and animated.
            useAnimations: true, // disables animations.

            easing: 'ease', // http://julian.com/research/velocity/#easing
            speed: 1000, // animation speed
            slideDelay: 0, // delay the animation
            perspective: 1200, // set 3D perspective
            transformOrigin: 'center top', // set the center point of the 3d animation
            perspectiveOrigin: '50% 50%', // camera angle

            translateY: 0, // animate along the Y axis (val: px or ‘slide’)
            translateX: 30, // animate along the X axis (val: px or ‘slide’)
            scale: 1, // animate scale (val: 0-2)
            rotateX: 0, // animate rotation (val: 0deg-360deg)
            rotateY: 0, // animate Y acces rotation (val: 0deg-360deg)
            skewY: 0, // animate Y skew (val: 0deg-360deg)
            skewX: 0 });
    }
});
Vue.component('experience', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(2)
});
Vue.component('faq', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(3),
    data: function data() {
        return {
            faq: {
                items: [{
                    title: 'Когда сможете приступить?',
                    text: 'На следующий рабочий день после получения предоплаты.'
                }, {
                    title: 'Как будет происходить коммуникация?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quaerat delectus reprehenderit maiores, ex ipsam magni saepe minus voluptatibus rerum, quo magnam est, expedita ut sint sed vero sit doloribus.'
                }, {
                    title: 'Как можно оплатить?',
                    text: 'Similique illo accusamus, quae nulla consectetur, obcaecati labore aspernatur eveniet, tempora in enim voluptatibus dolor sunt a nobis. Saepe beatae harum doloremque velit, dignissimos asperiores iste provident. Molestiae, iusto ducimus.'
                }, {
                    title: 'В каком виде я получу результат?',
                    text: 'Optio accusantium eos doloremque, fugiat adipisci molestiae voluptates expedita omnis modi amet odit architecto accusamus. Explicabo distinctio eum deserunt accusantium totam? Ut, dolorem iure recusandae quae suscipit corporis ea repellendus.'
                }]
            }
        };
    },
    mounted: function mounted() {
        // аккордеон
        $('.faq [data-accordion]:first').addClass('open');
        $('.faq [data-accordion]').accordion({
            transitionSpeed: 1000
        });
    }
});
Vue.component('form-order', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(4),
    props: ['plan', 'planDescription', 'cost'],
    computed: {
        location: function (_location) {
            function location() {
                return _location.apply(this, arguments);
            }

            location.toString = function () {
                return _location.toString();
            };

            return location;
        }(function () {
            return location.href;
        })
    }
});
Vue.component('form-question', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(5),
    computed: {
        location: function (_location2) {
            function location() {
                return _location2.apply(this, arguments);
            }

            location.toString = function () {
                return _location2.toString();
            };

            return location;
        }(function () {
            return location.href;
        })
    }
});
Vue.component('lightbox', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(6)
});
Vue.component('promo', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(7)
});
Vue.component('quality', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(8)
});
Vue.component('site-footer', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(9),
    computed: {
        location: function (_location3) {
            function location() {
                return _location3.apply(this, arguments);
            }

            location.toString = function () {
                return _location3.toString();
            };

            return location;
        }(function () {
            return location.href;
        })
    }
});
var App = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    name: 'App',
    data: {
        animateAnchors: true,
        animationsOnScholl: true,
        customFileInput: false,
        customSelect: false,
        detectBrowser: true,
        disableUserSelect: false,
        galleryLightbox: true,
        infiniteAjaxScroll: false,
        pagePreloader: false,
        pixelPerfect: true,
        rippleEffect: false,
        tooltips: false
    },
    methods: {
        pixlayout: function pixlayout() {
            $.pixlayout({
                src: "/assets/images/theme-main--960.png",
                show: true,
                top: 0,
                left: 282,
                opacity: 0.2
            });
        },
        bowser: function (_bowser) {
            function bowser() {
                return _bowser.apply(this, arguments);
            }

            bowser.toString = function () {
                return _bowser.toString();
            };

            return bowser;
        }(function () {
            $('html').attr('data-browser', bowser.name.toLowerCase().replace(/\s/g, '-'));
            $('html').attr('data-browser-version', Math.floor(bowser.version));
        }),
        mPageScroll2id: function mPageScroll2id() {
            $("a[href*='#'], button[href*='#']").mPageScroll2id({
                offset: 40,
                scrollSpeed: 1000,
                scrollEasing: 'easeInOutCubic'
            });
        },
        animsition: function animsition() {
            if ($("[data-page-preloader]").length) {
                $("[data-page-preloader]").animsition({
                    inClass: 'fade-in',
                    outClass: 'fade-out',
                    inDuration: 1500,
                    outDuration: 800,
                    linkElement: 'a:not([data-remodal-target]):not([target="_blank"]):not([href*="#"]):not([href*=":"])',
                    loading: true,
                    loadingParentElement: 'html',
                    loadingClass: 'animsition-loading',
                    loadingInner: '',
                    timeout: false,
                    timeoutCountdown: 5000,
                    onLoadEvent: true,
                    browser: ['animation-duration', '-webkit-animation-duration'],
                    overlay: false,
                    overlayClass: 'animsition-overlay-slide',
                    overlayParentElement: 'body',
                    transition: function transition(url) {
                        window.location.href = url;
                    }
                });
            }
        },
        lightcase: function lightcase() {
            $('[data-rel^=lightcase]').lightcase({
                liveResize: true,
                fullScreenModeForMobile: true,
                showSequenceInfo: false,
                maxWidth: 1200,
                maxHeight: 1000,
                overlayOpacity: 1
            });
        },
        wow: function wow() {
            new WOW().init();
        },
        tipso: function tipso() {
            if ($("[data-tooltip-text]").length) {
                $('[data-tooltip-text]').each(function () {
                    $(this).tipso({
                        speed: 400,
                        background: '#ededed',
                        titleBackground: '#0f69a8',
                        color: '#33373d',
                        titleColor: '#F0F0F0',
                        titleContent: $(this).attr('data-tooltip-title'),
                        showArrow: true,
                        position: 'top',
                        width: 'auto',
                        maxWidth: '',
                        delay: 500,
                        hideDelay: 0,
                        animationIn: 'fadeIn',
                        animationOut: 'fadeOut',
                        offsetX: 0,
                        offsetY: 0,
                        tooltipHover: false,
                        content: $(this).attr('data-tooltip-text'),
                        ajaxContentUrl: null,
                        contentElementId: null,
                        useTitle: true,
                        templateEngineFunc: null,
                        onBeforeShow: null,
                        onShow: null,
                        onHide: null,
                        size: 'medium'
                    });
                });
            }
        },
        ias: function ias() {
            var ias = $.ias({
                container: '.layout-wrap',
                item: '.items-row',
                pagination: '.pagination',
                next: '.pagination-next a'
            });
            ias.extension(new IASSpinnerExtension({
                src: ''
            }));
            ias.extension(new IASTriggerExtension({
                offset: 2,
                text: 'Load more items'
            }));
            ias.extension(new IASNoneLeftExtension({
                text: "You reached the end"
            }));
        },
        ripple: function ripple() {
            $('[data-ripple]').ripple();
        },
        selectric: function selectric() {
            $('select').selectric();
        },
        nicefileinput: function nicefileinput() {
            $('input[type=file]').nicefileinput({
                label: 'Обзор'
            });
        },
        disableSelect: function disableSelect() {
            document.ondragstart = noselect;
            document.onselectstart = noselect;
            document.oncontextmenu = noselect;

            function noselect() {
                return false;
            };
        },
        fixBrowsersBugs: function fixBrowsersBugs() {
            if ($('html[data-browser=internet-explorer]').length || $('html[data-browser=microsoft-edge]').length) {
                $('img[data-fix--ie--object-fit]').each(function () {
                    $(this).css({
                        'backgroundImage': 'url(' + $(this).attr('src') + ')',
                        'backgroundPosition': 'center center',
                        'backgroundRepeat': 'no-repeat',
                        'backgroundSize': 'cover',
                        'display': 'block'
                    }).removeAttr('src');
                    console.log($(this).css('objectPosition'));
                    console.log($(this).css('objectFit'));
                });
            };
        }
    },
    mounted: function mounted() {

        var vm = this;

        if (vm.pixelPerfect === true) {
            vm.pixlayout();
            console.info('Подключен плагин pixel-perfect верстки.');
        }
        if (vm.detectBrowser === true) {
            vm.bowser();
            console.info('Подключен плагин определения версии браузера.');
        }
        if (vm.animateAnchors === true) {
            vm.mPageScroll2id();
            console.info('Подключен плагин плавного скролла до анкоров.');
        }
        if (vm.pagePreloader === true) {
            vm.animsition();
            console.info('Подключен плагин прелоадера страницы.');
        }
        if (vm.galleryLightbox === true) {
            vm.lightcase();
            console.info('Подключен плагин лайтбокса для изображений.');
        }
        if (vm.animationsOnScholl === true) {
            vm.wow();
            console.info('Подключен плагин анимации при прокрутке страницы.');
        }
        if (vm.tooltips === true) {
            vm.tipso();
            console.info('Подключен плагин тултипов.');
        }
        if (vm.infiniteAjaxScroll === true) {
            vm.ias();
            console.info('Подключен плагин AJAX подгрузки элементов пагинации.');
        }
        if (vm.rippleEffect === true) {
            vm.ripple();
            console.info('Подключен плагин material эффекта для кнопок.');
        }
        if (vm.customSelect === true) {
            vm.selectric();
            console.info('Подключен плагин кастомного селекта.');
        }
        if (vm.customFileInput === true) {
            vm.nicefileinput();
            console.info('Подключен плагин кастомно инпута загрузки файлов.');
        }
        if (vm.disableUserSelect === true) {
            vm.disableSelect();
            console.info('Отключена возможность копирования контента пользователями.');
        }

        vm.fixBrowsersBugs();
    }
});

/***/ })
/******/ ]);