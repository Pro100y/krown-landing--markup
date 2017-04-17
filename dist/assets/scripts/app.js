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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<section class=about-us> <div class=about-us__content-wrap> <header class=about-us__title>Информация о&nbsp;нашем агентстве</header> <p class=about-us__subtitle>информация</p> <p class=about-us__paragraph> Мы являемся обособленным подразделением digital-агентства <span class=about-us__paragraph-accent>KRŌWN</span>, которое занимается исключительно версткой готовых дизайн-макетов. <br>Если вам требуется собрать качественные HTML-шаблоны для сайта или почтовой рассылки из готового дизайна, и уложиться в срок - вы в нужном месте в нужное время. </p> <p class=about-us__paragraph>Умеем в pixel-perfect, понимаем и сохраняем задумки дизайнеров и, при необходимости, примем ваш анимационный прототип из Principle.</p> </div> </section>";

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<section class=advantages> <div class=advantages__content-wrap> <ul class=advantages__nav> <li class=\"advantages__nav-item advantages__nav-item--1\">Быстрый запуск</li> <li class=\"advantages__nav-item advantages__nav-item--2\">гарантия сроков</li> <li class=\"advantages__nav-item advantages__nav-item--3\">оплата</li> <li class=\"advantages__nav-item advantages__nav-item--4\">наш подход</li> <li class=\"advantages__nav-item advantages__nav-item--5\">адаптивность</li> <li class=\"advantages__nav-item advantages__nav-item--6\">исходники</li> </ul> <div class=advantages__tabs-wrap> <advantages-tab promo-title=\"Быстрый запуск&nbsp;работ\" promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> <advantages-tab promo-title=\"Гарантия сроков\" promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> <advantages-tab promo-title=Оплата promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> <advantages-tab promo-title=\"Наш подход\" promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> <advantages-tab promo-title=Адаптивность promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> <advantages-tab promo-title=Исходники promo-text=\"Мы привыкли уважать бизнес-интересы своих заказчиков, поэтому со своей стороны мы делаем всё, чтобы экономить ваше время\" content=\"<h2>Какой порядок действий и что нужно для старта проекта?</h2>\n                <p>Для старта проекта необходимо внести аванс. Все работы по подготовке макетов к вёрстке начинаются после поступления аванса на наш расчётный счет. Для того чтобы зарезервировать ресурсы под ваш проект, достаточно вашего устного согласия с нашим предложением по бюджету и срокам. </p>\n                <h2>Как быстро я получу ответ менеджера?</h2>\n                <p>На первоначальную обработку заказа и подготовку списка уточняющих вопросов нам требуется порядка 1 часа. В выходные и праздничные дни может потребоваться немного больше времени.</p>\n                <h2>У меня уже есть техническое задание на вёрстку, как его вам передать?</h2>\n                <p>Вы можете прикрепить техническое задание и любые другие вспомогательные файлы непосредственно при оформлении заказа. Перетащите их мышкой в окно браузера или воспользуйтесь обычным загрузчиком. Также вы можете обратить внимание нашего менеджера на все существенные детали, которые сочтете нужными, уже в процессе общения. Пожалуйста, не волнуйтесь, мы умеем задавать правильные вопросы.</p>\"></advantages-tab> </div> </div> </section> ";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<figure class=advantages__tab> <div class=advantages__tab-container> <div class=advantages__tab-promo> <p class=advantages__tab-promo-title v-html=promoTitle></p> <p class=advantages__tab-promo-text>[[ promoText ]]</p> </div> <figcaption class=advantages__tab-content v-html=content></figcaption> </div> </figure> ";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<section class=contacts> <div class=contacts__content-wrap> <address class=contacts__content> <header class=contacts__title>Контакты</header> <p class=contacts__text> г. Севастополь, <br>Фиолентовское шоссе, д.1 </p> <a href=mailto:verstka@krown.cc class=contacts__mail>verstka@krown.cc</a> <br> <a href=tel:+74951182373 class=contacts__phone>+7 (495) 118 23 73</a> </address> </div> <slot></slot> </section>";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<section class=experience> <div class=experience__content-wrap> <article class=experience__content> <header class=experience__title>Верстаем с 2012 года и знаем в&nbsp;этом&nbsp;толк</header> <p class=experience__subtitle>информация</p> <p class=experience__paragraph> Мы являемся обособленным подразделением digital&nbsp;-&nbsp;агентства <span class=experience__paragraph-accent>KRŌWN</span>, которое занимается исключительно версткой готовых дизайн&nbsp;-&nbsp;макетов. <br>Если вам требуется собрать качественные HTML&nbsp;-&nbsp;шаблоны для сайта или почтовой рассылки из готового дизайна, и уложиться в срок&nbsp;- вы в нужном месте в нужное время. </p> <p class=experience__paragraph>Умеем в pixel-perfect, понимаем и сохраняем задумки дизайнеров и, при необходимости, примем ваш анимационный прототип из Principle.</p> </article> <aside class=experience__sidebar> <header class=experience__sidebar-title>ключевые преимущества</header> <ul class=experience__sidebar-list> <li class=experience__sidebar-list-item>современные методологии;</li> <li class=experience__sidebar-list-item>высокие стандарты качества;</li> <li class=experience__sidebar-list-item>специалисты в штате;</li> <li class=experience__sidebar-list-item>работаем по NDA;</li> <li class=experience__sidebar-list-item>более 5 лет опыта;</li> </ul> </aside> </div> </section>";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<section class=faq> <header class=faq__title>Краткий FAQ</header> <ul class=faq__list data-accordion-group> <li class=faq__list-item v-for=\"item in faq.items\" data-accordion> <p class=faq__list-item-title data-control>[[ item.title ]]</p> <figure class=faq__list-item-content-wrap data-content> <figcaption class=faq__list-item-content>[[ item.text ]]</figcaption> </figure> </li> </ul> </section>";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<section class=file-upload> <figure class=\"file-upload__dropzone / upload\"> <p class=file-upload__dropzone-title>Перетащите файлы проекта сюда</p> <p class=file-upload__dropzone-subtitle> Вы можете приложить исходники макетов, экспорты, <br>а так же дополнительное тех задание по верстке если оно у вас есть </p> </figure> <div class=file-upload__items-wrap> <p class=file-upload__items-title v-show=showItemsTitle>Вы загрузили:</p> <ol class=\"file-upload__list file-upload__list--done / filelist complete\"></ol> <ol class=\"file-upload__list file-upload__list--progress / filelist queue\"></ol> <button type=button class=\"file-upload__cancel-all / cancel_all\" v-if=showCancelAllButton>Отменить загрузку</button> </div> </section> ";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<form class=form-order action=/assets/forms/send-form.php :title=\"'Заказать лендинг с адреса: ' + location\" data-form> <header class=form-order__title>Заказать лендинг</header> <p class=form-order__subtitle>Оставьте Ваш номер телефона и мы перезвоним:</p> <figure class=\"form-order__items-wrap form-order__items-wrap--order\"> <div class=form-order__fields> <label for=\"\" class=form-order__label>Ваше имя:</label> <input type=text class=form-order__input name=ff1 placeholder=\"Введите ваше имя\"> <label for=\"\" class=form-order__label>Номер телефона*:</label> <input type=text class=form-order__input placeholder=\"+7 (495) 000-00-00\" name=ff2 data-form-phone-field required> <p class=form-order__status data-form-status></p> </div> <figcaption class=form-order__caption> <p class=form-order__caption-title>тариф:</p> <p class=form-order__plan>[[ plan ]]</p> <p class=form-order__plan-description>[[ planDescription ]]</p> <p class=form-order__cost> от <br>[[ cost ]] руб. </p> </figcaption> <button class=form-order__order data-form-btn>Оформить заказ</button> </figure> <figure class=\"form-order__items-wrap form-order__items-wrap--success\"> <header class=form-order__success-title>Спасибо за ваш заказ!</header> <p class=form-order__success-subtitle>Мы перезвоним вам в самое ближайшее время!</p> <a href=tel:+74959899857 class=form-order__success-phone>+7 (495) 989-98-57</a> </figure> </form>";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<form class=form-question action=/assets/forms/send-form.php :title=\"'Остались вопросы? с адреса: ' + location\" data-form> <figure class=form-question__success> <div class=form-question__success-content-wrap> <p class=\"form-question__title form-question__title--success\">Спасибо за ваше обращение</p> <p class=\"form-question__subtitle form-question__subtitle--success\">Мы перезвоним вам в самое ближайшее время!</p> </div> </figure> <p class=form-question__title>Остались вопросы?</p> <p class=form-question__subtitle>Оставьте Ваш номер телефона и мы перезвоним с бесплатной консультацией:</p> <div class=form-question__input-wrap> <input type=text class=form-question__input placeholder=\"+7 (___) ___-__-__\" name=ff1 required data-form-phone-field> <button data-form-btn class=form-question__button></button> </div> <p data-form-status class=form-question__status>Статус отправки</p> <p class=form-question__description>Или звоните нам по номеру +7 (495) 118 23 73</p> </form>";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<form action=/assets/forms/send-form.php class=form-upload enctype=multipart/form-data data-form> <ul class=form-upload__nav> <li class=form-upload__nav-item>МАКЕТЫ</li> <li class=form-upload__nav-item>ССЫЛКА</li> </ul> <section class=form-upload__tabs-wrap> <figure class=form-upload__tab> <file-upload @recalc-tab-heigth=heightFix();></file-upload> </figure> <figure class=form-upload__tab> <input type=text class=form-upload__link-field name=link placeholder=\"Укажите ссылку на скачаивание файлов проекта\"> </figure> </section> <div class=form-upload__fields-wrap> <label for=\"\" class=form-upload__label>ФИО:</label> <input type=text class=form-upload__input name=name placeholder=\"Ваше имя\"> <label for=\"\" class=form-upload__label>Электронная почта*:</label> <input type=text class=form-upload__input name=email placeholder=\"Ваш email\" required> <p class=form-upload__status data-form-status>Пожалуйста, укажите электронную почту</p> <label for=\"\" class=form-upload__label>Скайп:</label> <input type=text class=form-upload__input name=skype placeholder=\"Ваш скайп-логин\"> <label for=\"\" class=form-upload__label>Номер телефона*:</label> <input type=text class=form-upload__input name=phone placeholder=\"+7 (___) ___-__-__\" data-form-phone-field required> <p class=form-upload__status data-form-status>Пожалуйста, укажите номер телефона</p> <button class=form-upload__send data-form-btn>заказать верстку</button> </div> </form>";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<section class=keys> <div class=keys__content-wrap> <header class=keys__title> ключевые преимущества </header> <div class=keys__items-wrap> <figure class=keys__item>современные методологии</figure> <figure class=keys__item>высокие стандарты качества</figure> <figure class=keys__item>специалисты в штате</figure> <figure class=keys__item>работаем по NDA</figure> <figure class=keys__item>более 5 лет опыта</figure> </div> </div> </section>";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<transition name=lightbox--animation-> <section class=lightbox @click.self=\"$emit('close')\"> <figure class=lightbox__container> <button class=lightbox__close @click=\"$emit('close')\"></button> <slot name=lightbox__container>Содержимое лайтбокса</slot> </figure> </section> </transition>";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<section class=linking> <button class=linking__button :class=\"{ 'linking__button--active' : showModal}\" @click=\"showModal=!showModal; changeScroll();\"></button> <transition name=linking--animation-> <figure class=linking__modal v-show=showModal> <div class=linking__modal-content-wrap> <header class=linking__modal-header> <div class=linking__modal-header-col></div> <div class=linking__modal-header-col> <a href=\"\" class=linking__modal-logo></a> </div> <div class=linking__modal-header-col> <a href=tel:+74951182373 class=linking__modal__phone>+7 (495) 118 23 73</a> </div> </header> <p class=linking__modal-title>оказываем услуги:</p> <div class=linking__modal-items-wrap> <a href=http://landing.krown.cc class=\"linking__modal-item linking__modal-item--1\">Разработка landing page</a> <a href=http://verstka.krown.cc class=\"linking__modal-item linking__modal-item--2\">Верстка дизайн-макетов</a> <a href=http://support.krown.cc class=\"linking__modal-item linking__modal-item--3\"> Поддержка сайтов <br>на 1С-Битрикс</a> </div> <footer class=linking__modal-footer>Севастополь [[ year ]]</footer> </div> </figure> </transition> </section>";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=map-widget id=map-widget> <slot></slot> </div>";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<section class=navigation> <div class=navigation__content-wrap> <a href=/ class=navigation__logo></a> <nav class=navigation__menu> <a href=about-us.html class=navigation__menu-item :class=\"{'navigation__menu-item--active': currentPage == 'about-us'}\">О нас</a> <a href=outsource.html class=navigation__menu-item :class=\"{'navigation__menu-item--active': currentPage == 'outsource'}\">аутсорсинг</a> <a href=projects.html class=navigation__menu-item :class=\"{'navigation__menu-item--active': currentPage == 'projects'}\">портфолио</a> <a href=contacts.html class=navigation__menu-item :class=\"{'navigation__menu-item--active': currentPage == 'contacts'}\">контакты</a> <a href=order.html class=navigation__menu-order>заказать верстку</a> </nav> </div> </section>";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<section class=order> <div class=order__content-wrap> <header class=order__title>Оформление заявки на верстку</header> <p class=order__subtitle>Обратите внимание, что после получения заказа мы свяжемся с вами для уточнения нюансов. Пожалуйста, учитывайте, что для согласования всех условий заказа, а также расчёта стоимости и сроков выполнения проекта потребуется некоторое время.</p> <form-upload></form-upload> </div> </section>";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<section class=projects> <div class=projects__content-wrap> <header class=projects__title> <template v-if=\"device == 'laptop'\"> Оцените качество нашей верстки по проектам наших клиентов </template> <template v-else> Чтобы оценить качество нашей верстки, откройте наше портфолио на десктоп-устройстве. </template> </header> <section class=projects__gallery> <nav class=projects__gallery-nav v-if=\"device == 'laptop'\"> <button class=\"projects__gallery-nav-item projects__gallery-nav-item--active\" data-filter=*>Все проекты</button> <button class=projects__gallery-nav-item data-filter=[data-shop]>интернет-магазины</button> <button class=projects__gallery-nav-item data-filter=[data-landing]>лендинги</button> <button class=projects__gallery-nav-item data-filter=[data-special]>спец. проекты</button> </nav> <div class=projects__gallery-items-wrap> <projects-gallery-item link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-1.jpg suptitle=Интернет-магазин title=\"Gold Dragon Profit\" data-special></projects-gallery-item> <projects-gallery-item link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-2.jpg suptitle=\"Landing page\" title=Stropuva data-landing></projects-gallery-item> <projects-gallery-item v-show=\"device == 'laptop'\" link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-3.jpg suptitle=Интернет-магазин title=Viessmann data-shop></projects-gallery-item> <projects-gallery-item v-if=\"device == 'laptop'\" link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-4.jpg suptitle=\"Landing page\" title=\"Москлимат: Кондиционирование\" data-landing></projects-gallery-item> <projects-gallery-item v-show=\"device == 'laptop'\" link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-1.jpg suptitle=Интернет-магазин title=\"Gold Dragon Profit\" data-special></projects-gallery-item> <projects-gallery-item v-show=\"device == 'laptop'\" link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-2.jpg suptitle=\"Landing page\" title=Stropuva data-landing></projects-gallery-item> <projects-gallery-item v-show=\"device == 'laptop'\" link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-3.jpg suptitle=Интернет-магазин title=Viessmann data-shop></projects-gallery-item> <projects-gallery-item v-show=\"device == 'laptop'\" link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-4.jpg suptitle=\"Landing page\" title=\"Москлимат: Кондиционирование\" data-landing></projects-gallery-item> <projects-gallery-item v-show=\"device == 'laptop'\" link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-1.jpg suptitle=Интернет-магазин title=\"Gold Dragon Profit\" data-special></projects-gallery-item> <projects-gallery-item v-show=\"device == 'laptop'\" link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-2.jpg suptitle=\"Landing page\" title=Stropuva data-landing></projects-gallery-item> <projects-gallery-item v-show=\"device == 'laptop'\" link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-3.jpg suptitle=Интернет-магазин title=Viessmann data-shop></projects-gallery-item> <projects-gallery-item v-show=\"device == 'laptop'\" link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-4.jpg suptitle=\"Landing page\" title=\"Москлимат: Кондиционирование\" data-landing></projects-gallery-item> </div> </section> </div> </section>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<figure class=projects__gallery-item data-transition-off> <div class=projects__gallery-item-content-wrap @click=\"showWorkFrame = true; changeScroll();\"> <img :src=image :alt=title class=projects__gallery-item-image data-adaptive-background> <p class=projects__gallery-item-suptitle>[[ suptitle ]]</p> <p class=projects__gallery-item-title>[[ title ]]</p> </div> <work-frame v-if=showWorkFrame @close=\"showWorkFrame = false; changeScroll();\" :href=link :type=suptitle :name=title></work-frame> </figure>";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<header class=promo> <div class=promo__content-wrap> <div class=promo__container> <div class=promo__content> <h1 class=promo__title>Качественная и&nbsp;быстрая верстка ваших дизайн-макетов</h1> <p class=promo__subtitle>Превратим ваши psd/sketch макеты в структурированный набор html/css файлов. Сохраним pixel-perfect, прикрутим анимацию.</p> <div class=promo__items-wrap> <figure class=promo__item> <div class=\"promo__item-icon promo__item-icon--1\"></div> <figcaption class=promo__item-caption>sketch</figcaption> </figure> <figure class=promo__item> <div class=\"promo__item-icon promo__item-icon--2\"></div> <figcaption class=promo__item-caption>photoshop</figcaption> </figure> </div> <a href=order.html class=promo__order>заказать верстку</a> <a href=#site-footer class=\"promo__order promo__order--mobile\">заказать верстку</a> <a href=#quality class=promo__readmore>смотреть примеры работ</a> </div> <div class=promo__image-wrap> <img src=/assets/images/promo-2.jpg alt=\"\" class=\"promo__image promo__image--1 wow promoImage\"> <img src=/assets/images/promo-3.jpg alt=\"\" class=\"promo__image promo__image--2 wow promoImage\"> </div> </div> </div> </header>";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<section class=quality id=quality> <div class=quality__content-wrap> <header class=quality__title>Качество нашей верстки говорит за себя</header> <p class=quality__subtitle>Стабильность исполнения на высоком уровне позволяет нашим постоянным клиентам всегда быть уверенными в результате</p> <div class=quality__items-wrap> <quality-item link=https://coolors.co/899e8b-99c5b5-afece7-81f499-666b6a image=/assets/images/quality-1.jpg suptitle=Интернет-магазин title=\"Gold Dragon Profit\"></quality-item> <quality-item link=http://bugmenot.com/ image=/assets/images/quality-2.jpg suptitle=\"Landing page\" title=Stropuva></quality-item> <quality-item v-if=\"device == 'laptop'\" link=https://habrastorage.org/ image=/assets/images/quality-3.jpg suptitle=Интернет-магазин title=Viessmann></quality-item> <quality-item v-if=\"device == 'laptop'\" link=https://coolors.co/899e8b-99c5b5-afece7-81f499-666b6a image=/assets/images/quality-4.jpg suptitle=\"Landing page\" title=\"Москлимат: Кондиционирование\"></quality-item> <button class=quality__readmore v-show=!readmore @click=\"readmore = true\">полный список работ</button> <transition enter-active-class=\"animated fadeIn\" leave-active-class=\"animated fadeOut\"> <section class=quality__readmore-items-wrap v-show=readmore> <quality-item link=http://landing.dev.krown.cc/pages/1.home.html image=/assets/images/quality-1.jpg suptitle=Интернет-магазин title=\"Gold Dragon Profit\"></quality-item> <quality-item link=http://content.dev.krown.cc/pages/1.home.html image=/assets/images/quality-2.jpg suptitle=\"Landing page\" title=Stropuva></quality-item> <quality-item link=http://krimgrad.dev.krown.cc/pages/1.home.html image=/assets/images/quality-3.jpg suptitle=Интернет-магазин title=Viessmann></quality-item> <quality-item link=http://krimgrad.dev.krown.cc/pages/9.filter.html image=/assets/images/quality-4.jpg suptitle=\"Landing page\" title=\"Москлимат: Кондиционирование\"></quality-item> </section> </transition> </div> </div> </section>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<figure class=quality__item> <div class=quality__item-content-wrap @click=\"showWorkFrame = true; changeScroll();\"> <img :src=image :alt=title class=quality__item-image data-adaptive-background> <p class=quality__item-suptitle>[[ suptitle ]]</p> <p class=quality__item-title>[[ title ]]</p> </div> <work-frame v-if=showWorkFrame @close=\"showWorkFrame = false; changeScroll();\" :href=link :type=suptitle :name=title></work-frame> </figure>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<footer class=site-footer id=site-footer> <div class=site-footer__content-wrap> <div class=site-footer__form-question-wrap> <form-question></form-question> </div> <div class=site-footer__faq-wrap> <faq></faq> </div> </div> <hr class=site-footer__hr> <div class=site-footer__content-wrap> <a href=mailto:hello.krown.cc class=site-footer__email>HELLO@KROWN.CC</a> <span class=site-footer__city>Севастополь, Фиолентовское шоссе д.1</span> <a href=tel:+74951182373 class=site-footer__phone>+7 (495) 118 23 73</a> </div> </footer>";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<section class=special> <div class=special__content-wrap> <article class=special__content> <header class=special__title>Специальное предложение для студий и агентств</header> <aside class=\"special__sidebar special__sidebar--mobile\"> <p class=special__sidebar-title>почасовая тарификация</p> <p class=special__cost data-from=от data-to=\"за час\">800 р.</p> </aside> <p class=special__subtitle>Мы открыты для сотрудничества, и предлагаем агентствам и студиям выгодные условия по аутсорсингу. Условия работы обсуждаются индивидуально, по всем вопросам обращайтесь:</p> <a href=mailto: class=special__mail>outsource@krown.cc</a> <a href=tel:+74951182373 class=special__phone>+7 (495) 118 23 73</a> </article> <aside class=special__sidebar> <p class=special__sidebar-title>почасовая тарификация</p> <p class=special__cost data-from=от data-to=\"за час\">800 р.</p> </aside> </div> </section>";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<transition name=work-frame--animation-> <section class=work-frame> <header class=work-frame__header> <nav class=work-frame__content-wrap> <button class=work-frame__back type=button @click.self=\"$emit('close');\">Назад к списку работ</button> <span class=work-frame__info>Проект: [[ type ]] [[ name ]]</span> </nav> </header> <iframe class=work-frame__iframe :src=href></iframe> </section> </transition> ";

/***/ }),
/* 24 */
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
                $f.find('[data-form-field-invalid], .form-question__button').addClass('shake animated');
                setTimeout(function () {
                    $f.find('[data-form-field-invalid], .form-question__button').removeClass('shake animated');
                }, 1000);
            }
        });

        // если есть поля с ошибками то сообщаем об этом пользователю
        if ($f.find('[data-form-field-invalid]').length) {
            $f.find(':not([data-form-field-invalid]) + [data-form-status]').slideUp(500);
            $f.find('[data-form-field-invalid] + [data-form-status]').slideDown(500);
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
                // $s.html(status[r]).slideDown(500);

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
Vue.component('about-us', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(0)
});
Vue.component('advantages-tab', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(2),
    props: ['promoTitle', 'promoText', 'content']
});

Vue.component('advantages', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(1),
    mounted: function mounted() {
        $('.advantages').tabtab({
            tabMenu: '.advantages__nav', // direct container of the tab menu items
            tabContent: '.advantages__tabs-wrap', // direct container of the tab content items

            startSlide: 1, // starting slide on pageload
            arrows: true, // keyboard arrow navigation
            // dynamicHeight: false, // if true the height will dynamic and animated.
            fixedHeight: false, // if true the height will dynamic and animated.
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

        //фикс начальной высоты табов
        var heightFix = function heightFix() {
            $(".advantages .js-tabs-height").height($(".advantages__tab.active").outerHeight() + 42);
        };
        heightFix();
        $(window).resize(function () {
            heightFix();
        });
    }
});
Vue.component('contacts', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(3)
});
Vue.component('experience', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(4)
});
Vue.component('faq', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(5),
    data: function data() {
        return {
            faq: {
                items: [{
                    title: 'Когда сможете приступить?',
                    text: 'На следующий рабочий день после получения предоплаты.'
                }, {
                    title: 'Как будет происходить коммуникация?',
                    text: 'Вы сможете обсудить все существенные детали проекта с менеджером по телефону или скайпу. Для предметного обсуждения проекта нам в любом случае потребуется взглянуть на макеты страниц, поэтому давайте начнем с оформления заявки через форму заказа, которая расположена выше.'
                }, {
                    title: 'Как можно оплатить?',
                    text: 'Мы принимаем оплату по безналичному расчёту от юридических лиц, а также с помощью банковских карт (Mastercard, Visa).'
                }, {
                    title: 'В каком виде я получу результат?',
                    text: 'Мы можем предоставить результат в виде минифицированного кода (оптимизированного по скорости загрузки), в виде обычного форматированного html/css, либо в формате одного из препроцессора.'
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
Vue.component('file-upload', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(6),
    data: function data() {
        return {
            showCancelAllButton: false,
            showItemsTitle: false
        };
    },

    mounted: function mounted() {

        var vm = this;

        //file upload
        $(".upload").upload({
            maxSize: 1073741824,
            beforeSend: onBeforeSend,
            label: ''
        }).on("start.upload", onStart).on("complete.upload", onComplete).on("filestart.upload", onFileStart).on("fileprogress.upload", onFileProgress).on("filecomplete.upload", onFileComplete).on("fileerror.upload", onFileError).on("chunkstart.upload", onChunkStart).on("chunkprogress.upload", onChunkProgress).on("chunkcomplete.upload", onChunkComplete).on("chunkerror.upload", onChunkError).on("queued.upload", onQueued);
        $(".file-upload__list--progress").on("click", ".cancel", onCancel);
        $(".cancel_all").on("click", onCancelAll);

        function onCancel(e) {
            console.log("Cancel");
            var index = $(this).parents("li").data("index");
            $(this).parents("form").find(".upload").upload("abort", parseInt(index, 10));
        }

        function onCancelAll(e) {
            console.log("Cancel All");
            $(this).parents("form").find(".upload").upload("abort");
            $(this).parents("form").find(".file-upload__list--done").html("");
            $(this).parents("form").find(".file-upload__list--progress").html("");
        }

        function onBeforeSend(formData, file) {
            console.log("Before Send");
            formData.append("test_field", "test_value");
            // return (file.name.indexOf(".jpg") < -1) ? false : formData; // cancel all jpgs
            return formData;
        }

        function onQueued(e, files) {
            console.log("Queued");
            var html = '';
            for (var i = 0; i < files.length; i++) {
                html += '<li data-file="' + files[i].name + '" data-index="' + files[i].index + '"><span class="content"><span class="file">' + files[i].name + '</span><span class="cancel">Отмена</span><span class="progress">Queued</span></span><span class="file-upload__bar"></span></li>';
            }
            $(this).parents("form").find(".file-upload__list--progress").append(html);
        }

        function onStart(e, files) {
            console.log("Start");
            vm.showItemsTitle = true;
            vm.$emit('recalc-tab-heigth');
            $(this).parents("form").find(".file-upload__list--progress").find("li").find(".progress").text("Waiting");
        }

        function onComplete(e) {
            console.log("Загрузка файлов завершена.");
            // All done!
        }

        function onFileStart(e, file) {
            console.log("File Start");
            $(this).parents("form").find(".file-upload__list--progress").find("li[data-index=" + file.index + "]").find(".progress").text("0%");
        }

        function onFileProgress(e, file, percent) {
            console.log("File Progress");
            var $file = $(this).parents("form").find(".file-upload__list--progress").find("li[data-index=" + file.index + "]");
            $file.find(".progress").text(percent + "%");
            $file.find(".file-upload__bar").css("width", percent + "%");
        }

        function onFileComplete(e, file, response) {
            console.log("File Complete");
            if (response.trim() === "" || response.toLowerCase().indexOf("error") > -1) {
                $(this).parents("form").find(".file-upload__list--progress").find("li[data-index=" + file.index + "]").addClass("error").find(".progress").text(response.trim());
            } else {
                var $target = $(this).parents("form").find(".file-upload__list--progress").find("li[data-index=" + file.index + "]");
                $target.find(".file").text(file.name);
                $target.find(".progress").remove();
                $target.find(".cancel").remove();
                $target.appendTo($(this).parents("form").find(".file-upload__list--done"));
            }
        }

        function onFileError(e, file, error) {
            console.log("File Error");
            $(this).parents("form").find(".file-upload__list--progress").find("li[data-index=" + file.index + "]").addClass("error").find(".progress").text("Error: " + error);
        }

        function onChunkStart(e, file) {
            console.log("Chunk Start");
        }

        function onChunkProgress(e, file, percent) {
            console.log("Chunk Progress");
        }

        function onChunkComplete(e, file, response) {
            console.log("Chunk Complete");
        }

        function onChunkError(e, file, error) {
            console.log("Chunk Error");
        }
    }
});
Vue.component('form-order', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(7),
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
    template: __webpack_require__(8),
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
Vue.component('form-upload', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(9),
    methods: {
        //фикс начальной высоты табов
        heightFix: function heightFix() {
            setTimeout(function () {
                $(".form-upload .js-tabs-height").height($(".form-upload__tab.active").outerHeight());
                console.info('Перерасчитана высота активного таба');
            }, 0);
        }
    },
    mounted: function mounted() {
        var vm = this;
        $('.form-upload').tabtab({
            tabMenu: '.form-upload__nav', // direct container of the tab menu items
            tabContent: '.form-upload__tabs-wrap', // direct container of the tab content items

            startSlide: 1, // starting slide on pageload
            arrows: true, // keyboard arrow navigation
            // dynamicHeight: false, // if true the height will dynamic and animated.
            fixedHeight: false, // if true the height will dynamic and animated.
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

        vm.heightFix();
        $(window).resize(function () {
            vm.heightFix();
        });
    }
});
Vue.component('keys', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(10)
});
Vue.component('lightbox', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(11)
});
Vue.component('linking', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(12),
    data: function data() {
        return {
            showModal: false
        };
    },

    computed: {
        year: function year() {
            var currentYear = new Date();
            return currentYear.getFullYear();
        }
    },
    methods: {
        changeScroll: function changeScroll() {
            if (this.showModal === true) {
                $('html').attr('data-lock-scroll', '').css({
                    'paddingRight': '15px'
                });
            } else {
                setTimeout(function () {
                    $('html').removeAttr('data-lock-scroll').css({
                        'paddingRight': '0px'
                    });
                }, 500);
            }
        }
    }
});
Vue.component('map-widget', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(13),
    props: ['address'],
    mounted: function mounted() {

        var query = this.address;

        // Yandex Map
        document.addEventListener('DOMContentLoaded', function () {

            ymaps.ready().done(function (ym) {
                var map = new ym.Map('map-widget', {
                    center: [44.584508154698284, 33.48243169524696],
                    zoom: 13,
                    controls: ['zoomControl']
                }, {
                    searchControlProvider: 'yandex#search'
                });

                var placemark = new ymaps.Placemark([44.583342702721794, 33.48246388175512], {
                    hintContent: 'г. Севастополь, Фиолентовское шоссе, д.1',
                    balloonContent: 'KROWN'
                });

                map.geoObjects.add(placemark);

                map.behaviors.disable('scrollZoom');
            });
        });
    }
});
Vue.component('navigation', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(14),
    computed: {
        currentPage: function currentPage() {
            if (document.querySelectorAll('[data-page="home"]').length) {
                return 'home';
            } else if (document.querySelectorAll('[data-page="about-us"]').length) {
                return 'about-us';
            } else if (document.querySelectorAll('[data-page="outsource"]').length) {
                return 'outsource';
            } else if (document.querySelectorAll('[data-page="projects"]').length) {
                return 'projects';
            } else if (document.querySelectorAll('[data-page="contacts"]').length) {
                return 'contacts';
            } else {
                console.warn('Текущая страница неопределена.');
            }
        }
    }
});
Vue.component('order', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(15)
});
Vue.component('projects-gallery-item', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(17),
    data: function data() {
        return {
            showWorkFrame: false
        };
    },

    props: ['link', 'image', 'suptitle', 'title'],
    methods: {
        changeScroll: function changeScroll() {
            if (this.showWorkFrame === true) {
                $('html').attr('data-lock-scroll', '').css({
                    'paddingRight': '15px'
                });
            } else {
                setTimeout(function () {
                    $('html').removeAttr('data-lock-scroll').css({
                        'paddingRight': '0px'
                    });
                }, 500);
            }
        }
    },
    mounted: function mounted() {

        var vm = this;

        $.adaptiveBackground.run({
            selector: '[data-adaptive-background]',
            parent: null,
            exclude: ['rgb(0,0,0)', 'rgba(255,255,255)'],
            normalizeTextColor: true,
            normalizedTextColors: {
                light: "#fff",
                dark: "#333"
            },
            lumaClasses: {
                light: "ab-light",
                dark: "ab-dark"
            }
        });
    }
});

Vue.component('projects', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(16),
    data: function data() {
        return {
            device: 'laptop'
        };
    },

    methods: {
        detectDevice: function detectDevice() {
            if ($(window).width() >= 960) {
                return 'laptop';
            } else {
                return 'mobile';
            }
        }
    },
    mounted: function mounted() {

        var vm = this;

        // определяем устройство клиента
        vm.device = vm.detectDevice();

        window.addEventListener('resize', function () {
            vm.device = vm.detectDevice();
        });

        document.addEventListener('DOMContentLoaded', function () {

            // инициализируем сетку
            var $grid = $('.projects__gallery-items-wrap').isotope({
                itemSelector: '.projects__gallery-item'
            });

            // инициализируем фильтр
            $('.projects__gallery-nav').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            // делаем кнопки фильтра активными при нажаии
            $('.projects__gallery-nav-item').click(function () {
                $('.projects__gallery-nav-item--active').removeClass('projects__gallery-nav-item--active');
                $(this).addClass('projects__gallery-nav-item--active');
            });
        });
    }
});
Vue.component('promo', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(18),
    data: function data() {
        return {
            device: ''
        };
    },

    methods: {
        detectDevice: function detectDevice() {
            if ($(window).width() >= 960) {
                return 'laptop';
            } else {
                return 'mobile';
            }
        }
    },
    mounted: function mounted() {

        var vm = this;

        vm.device = vm.detectDevice();

        window.addEventListener('resize', function () {
            vm.device = vm.detectDevice();
        });
    }
});
Vue.component('quality-item', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(20),
    data: function data() {
        return {
            showWorkFrame: false
        };
    },

    props: ['link', 'image', 'suptitle', 'title'],
    methods: {
        changeScroll: function changeScroll() {
            if (this.showWorkFrame === true) {
                $('html').attr('data-lock-scroll', '').css({
                    'paddingRight': '15px'
                });
            } else {
                setTimeout(function () {
                    $('html').removeAttr('data-lock-scroll').css({
                        'paddingRight': '0px'
                    });
                }, 500);
            }
        }
    },
    mounted: function mounted() {

        var vm = this;

        $.adaptiveBackground.run({
            selector: '[data-adaptive-background]',
            parent: null,
            exclude: ['rgb(0,0,0)', 'rgba(255,255,255)'],
            normalizeTextColor: true,
            normalizedTextColors: {
                light: "#fff",
                dark: "#333"
            },
            lumaClasses: {
                light: "ab-light",
                dark: "ab-dark"
            }
        });
    }
});

Vue.component('quality', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(19),
    data: function data() {
        return {
            readmore: false,
            device: ''
        };
    },

    methods: {
        detectDevice: function detectDevice() {
            if ($(window).width() >= 960) {
                return 'laptop';
            } else {
                return 'mobile';
            }
        }
    },
    mounted: function mounted() {

        var vm = this;

        vm.device = vm.detectDevice();

        window.addEventListener('resize', function () {
            vm.device = vm.detectDevice();
        });
    }
});
Vue.component('site-footer', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(21),
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
Vue.component('special', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(22)
});
Vue.component('work-frame', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(23),
    props: ['href', 'type', 'name']
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
        galleryLightbox: false,
        infiniteAjaxScroll: false,
        pagePreloader: false,
        pixelPerfect: false,
        rippleEffect: false,
        tooltips: false
    },
    methods: {
        pixlayout: function pixlayout() {
            $.pixlayout({
                src: "/assets/images/theme-contacts--320.jpg",
                show: true,
                top: 0,
                left: 0,
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
                offset: 0,
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
        },

        /**
         * Фиксация цели отслеживания
         *
         * @param {string} target       Отслеживаемый DOM элемент
         * @param {string} event        Отслеживаемое событие
         * @param {string} reachGoal    Имя цели в Яндекс.Метрике
         */
        yandexTarget: function yandexTarget(target, event, reachGoal) {

            $(target).on(event, function () {
                window.onload = function () {
                    yaCounter44256449.reachGoal(reachGoal);
                };
                console.info('Отслеживаемый DOM элемент: ' + target + '\n', 'Отслеживаемое событие:     ' + event + '\n', 'Имя цели в Яндекс.Метрике: ' + reachGoal);
                return true;
            });
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

        vm.yandexTarget('.promo__order', 'click', 'ORDER');
        vm.yandexTarget('.form-upload__send', 'click', 'ORDER_SUBMIT');
        vm.yandexTarget('.promo__readmore', 'click', 'PROJECTS');
        vm.yandexTarget('.form-question__button', 'click', 'CALL_SUBMIT');
        vm.yandexTarget('.navigation__menu-order', 'click', 'ORDER_TOP');
    }
});

/***/ })
/******/ ]);