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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<section class=cost-2> <div class=cost-2__content-wrap> <header class=cost-2__title>Наши тарифы</header> <div class=cost-2__items-wrap> <figure class=cost-2__item> <p class=cost-2__item-title>Базовый</p> <p class=cost-2__item-subtitle>Когда нужен качественный лендинг в срок и за адекватные деньги</p> <p class=cost-2__item-summary>48 000 руб.</p> <button class=cost-2__item-order @click=\"showLightbox = true\">заказать</button> <ul class=cost-2__item-list> <li class=cost-2__item-list-elem>интервью с клиентом и формирование бизнес задач</li> <li class=cost-2__item-list-elem>прототипирование</li> <li class=cost-2__item-list-elem>подготовка контента/копирайтинг</li> <li class=cost-2__item-list-elem>адаптивный дизайн</li> <li class=cost-2__item-list-elem>верстка</li> <li class=cost-2__item-list-elem>настройка уведомлений на почту</li> </ul> </figure> <figure class=\"cost-2__item cost-2__item--optimal\"> <p class=cost-2__item-title>Старт продаж</p> <p class=cost-2__item-subtitle>Когда надо получить звонки/заявки в компанию, и не беспокоиться о результате.</p> <p class=cost-2__item-summary>97 000 руб.</p> <button class=cost-2__item-order @click=\"showLightbox = true\">заказать</button> <ul class=cost-2__item-list> <li class=cost-2__item-list-elem>интервью с клиентом и формирование бизнес задач</li> <li class=cost-2__item-list-elem>прототипирование</li> <li class=cost-2__item-list-elem>подготовка контента/копирайтинг</li> <li class=cost-2__item-list-elem>адаптивный дизайн</li> <li class=cost-2__item-list-elem>верстка</li> <li class=cost-2__item-list-elem>настройка уведомлений на почту</li> <li class=cost-2__item-list-elem>подготовка РК: Я.Директ, Google AdWords</li> <li class=cost-2__item-list-elem>настройка ретаргетинга</li> <li class=cost-2__item-list-elem>настройка целей и отслеживание конверсии</li> <li class=cost-2__item-list-elem>+1 месяц контроля работы рекламных кампаний</li> </ul> </figure> <figure class=cost-2__item> <p class=cost-2__item-title>Старт продаж + аналитика</p> <p class=cost-2__item-subtitle>Получить лучший результат в отрасли по объему звонков/заявок, и самую низкую стоимость привлечения?</p> <p class=cost-2__item-summary>от 180 000 руб.</p> <button class=cost-2__item-order @click=\"showLightbox = true\">заказать</button> <ul class=cost-2__item-list> <li class=cost-2__item-list-elem>интервью с клиентом и формирование бизнес задач</li> <li class=cost-2__item-list-elem>прототипирование</li> <li class=cost-2__item-list-elem>подготовка контента/копирайтинг</li> <li class=cost-2__item-list-elem>адаптивный дизайн</li> <li class=cost-2__item-list-elem>верстка</li> <li class=cost-2__item-list-elem>настройка уведомлений на почту</li> <li class=cost-2__item-list-elem>подготовка РК: Я.Директ, Google AdWords</li> <li class=cost-2__item-list-elem>настройка ретаргетинга</li> <li class=cost-2__item-list-elem>настройка целей и отслеживание конверсии</li> <li class=cost-2__item-list-elem>+1.5 месяц контроля работы рекламных кампаний</li> <li class=cost-2__item-list-elem>настройка целей Я.Метрика/G.Analytics</li> <li class=cost-2__item-list-elem>отслеживание конверсии и стоимости привлечения</li> <li class=cost-2__item-list-elem>настройка динамического Call-trackinga</li> <li class=cost-2__item-list-elem>интеграция с вашей CRM или внедрение AmoCRM</li> <li class=cost-2__item-list-elem>проведение A/B тестирование</li> <li class=cost-2__item-list-elem>анализ поведенческих факторов</li> </ul> </figure> </div> </div> <lightbox v-show=showLightbox @close=\"showLightbox = false\"> <form-order slot=lightbox__container></form-order> </lightbox> </section>";

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<section class=cost> <div class=cost__content-wrap> <header class=cost__title> от <br>45 000 рублей </header> <p class=cost__subtitle>За эти деньги вы получаете полностью готовый landing page, заполненный контентом и исправно настроенный. Вам останется только начать привлекать целевой трафик для получения звонков/заявок.</p> <div class=cost__items-wrap> <figure class=\"cost__item cost__item--1\">Маркетинговое исследование, анализ конкурентов</figure> <figure class=\"cost__item cost__item--2\">Разработка ТЗ</figure> <figure class=\"cost__item cost__item--3\">Прототипирование</figure> <figure class=\"cost__item cost__item--4\">Дизайн (десктоп + мобильная версия)</figure> <figure class=\"cost__item cost__item--5\">Верстка макетов</figure> <figure class=\"cost__item cost__item--6\">Подключение к CMS (опционально)</figure> </div> </div> </section>";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<section class=cycle> <div class=cycle__content-wrap> <header class=cycle__header> <p class=cycle__title> 10 дней* <br>на полный цикл </p> <p class=cycle__subtitle>*- рабочих дней за стандартный цикл</p> </header> <div class=cycle__image-wrap> <img src=/assets/images/cycle-1.png alt=\"\" class=cycle__image> </div> </div> </section>";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<form class=form-order data-form> <header class=form-order__title>Заказать лендинг</header> <p class=form-order__subtitle>Оставьте Ваш номер телефона и мы перезвоним:</p> <figure class=\"form-order__items-wrap form-order__items-wrap--order\"> <div class=form-order__fields> <label for=\"\" class=form-order__label>Ваше имя:</label> <input type=text class=form-order__input placeholder=\"Введите ваше имя\"> <label for=\"\" class=form-order__label>Номер телефона*:</label> <input type=text class=form-order__input placeholder=\"+7 (495) 000-00-00\" data-form-phone-field required> <p class=form-order__status data-form-status>asfasfsadf</p> </div> <figcaption class=form-order__caption> <p class=form-order__caption-title>тариф:</p> <p class=form-order__plan>Старт продаж + аналитика</p> <p class=form-order__plan-description>Получить лучший результат в отрасли по объему звонков/заявок, и самую низкую стоимость привлечения?</p> <p class=form-order__cost> от <br>180 000 руб. </p> </figcaption> <button class=form-order__order data-form-btn>Оформить заказ</button> </figure> <figure class=\"form-order__items-wrap form-order__items-wrap--success\"> <header class=form-order__success-title>Спасибо за ваш заказ!</header> <p class=form-order__success-subtitle>Мы перезвоним вам в самое ближайшее время!</p> <a href=tel:+74959899857 class=form-order__success-phone>+7 (495) 989-98-57</a> </figure> </form>";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<transition name=lightbox--animation-> <section class=lightbox @click.self=\"$emit('close')\"> <figure class=lightbox__container> <button class=lightbox__close @click=\"$emit('close')\"></button> <slot name=lightbox__container>Содержимое лайтбокса</slot> </figure> </section> </transition>";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<section class=portfolio-2 id=portfolio ref=portfolio> <div class=portfolio-2__content-wrap> <div class=\"portfolio-2__items-wrap portfolio-2__items-wrap--visible\"> <slot name=portfolio-2__items-wrap--visible></slot> <transition enter-active-class=\"animated fadeIn\" leave-active-class=\"animated fadeOut\"> <div class=\"portfolio-2__items-wrap portfolio-2__items-wrap--hidden\" v-if=visibility> <slot name=portfolio-2__items-wrap--hidden></slot> </div> </transition> </div> <button class=portfolio-2__showmore type=button v-if=!visibility v-on:click=\"visibility = !visibility\">показать еще</button> </div> </section>";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<figure class=portfolio-2__item-cost> <strong class=portfolio-2__item-cost-summary>[[ summary ]]</strong> <p class=portfolio-2__item-cost-description>[[ description ]]</p> </figure> ";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<figure class=portfolio-2__item> <div class=portfolio-2__item-image-wrap> <img :src=\"'/assets/images/' + image\" alt=\"\" class=portfolio-2__item-image data-fix--ie--object--fit> </div> <figcaption class=portfolio-2__item-caption> <p class=portfolio-2__item-title>[[ title ]]</p> <p class=portfolio-2__item-text>[[ text ]]</p> <div class=portfolio-2__item-costs-wrap> <slot></slot> </div> <a :href=readmoreLink class=portfolio-2__item-readmore target=_blank>смотреть</a> </figcaption> </figure> ";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<section class=portfolio id=portfolio> <div class=portfolio__content-wrap> <div class=portfolio__items-wrap> <portfolio-item link=# image=1 title=Время subtitle=\"Часовой магазин и ломбард\" conversion=\"Конверсия: 12%\"></portfolio-item> <portfolio-item link=# image=2 title=Шкафы subtitle=\"Изготовление и продажа шкафов-купе\" conversion=\"Конверсия: 12%\"></portfolio-item> <portfolio-item link=# image=3 title=Stropuva subtitle=\"Продажа котлов Stropuva\" conversion=\"Конверсия: 12%\"></portfolio-item> </div> <transition enter-active-class=\"animated fadeIn\" leave-active-class=\"animated fadeOut\"> <div class=portfolio__items-wrap v-if=visibility> <portfolio-item link=# image=1 title=Время subtitle=\"Часовой магазин и ломбард\" conversion=\"Конверсия: 12%\"></portfolio-item> <portfolio-item link=# image=2 title=Шкафы subtitle=\"Изготовление и продажа шкафов-купе\" conversion=\"Конверсия: 12%\"></portfolio-item> <portfolio-item link=# image=3 title=Stropuva subtitle=\"Продажа котлов Stropuva\" conversion=\"Конверсия: 12%\"></portfolio-item> </div> </transition> <button class=portfolio__showmore type=button v-if=!visibility v-on:click=\"visibility = !visibility\">показать еще</button> </div> </section>";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<a :href=link class=portfolio__item target=_blank> <div class=portfolio__item__image-wrap> <img :src=\"'/assets/images/portfolio-' +  image + '.jpg'\" alt=\"\" class=portfolio__item-image> </div> <div class=portfolio__item-caption> <p class=portfolio__item-title>[[ title ]]</p> <p class=portfolio__item-subtitle>[[ subtitle ]]</p> <p class=portfolio__item-conversion>[[ conversion ]]</p> </div> </a>";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<section class=process> <div class=process__content-wrap> <header class=process__title> <span class=process__title-decor>Как проходит процесс</span> <br><span class=process__title-decor>разработки</span> </header> <p class=process__subtitle> Мы предлагаем отлаженный процесс разработки landing page. <br>Он проверен временем, понятен, и, самое главное - абсолютно прозрачен для клиента. <br>Мы не прячем процессы и всегда даем возможность клиенту наблюдать за рабочим процессом real-time (пригласим к нам в Basecamp). </p> <div class=process__items-wrap> <process-item image=1 title=\"Прототипируем и&nbsp;пишем тексты\" text=\"Мы тщательно изучаем ваш продукт и погружаемся в тематику. Подчеркиваем ваше УТП авторскими текстами и отрабатываем концепцию продаж на интерактивных прототипах.\"></process-item> <process-item image=2 title=\"Готовим дизайн-концепцию\" text=\"Мы знаем как заставить дизайн работать на благо вашего продукта и уделяем этому достаточно времени. Мы не сторонники вычурного и кричащего дизайна, и убеждены, что его должно ровно столько чтобы подчеркнуть товар/услугу.<br>Мы за разумный минимализм.\"></process-item> <process-item image=3 title=\"Верстаем и подклю-чаем админ. панель\" text=\"Мы понимаем насколько важен мобильный трафик, поэтому абсолютно все наши проекты адаптивны. Для каждого выпускаемого нами landing page, мы предоставляем простую и удобную административную панель.\"></process-item> <process-item image=4 title=\"Настраиваем и&nbsp;запускаем РК\" text=\"Мы подготовим качественную рекламную кампанию в Yandex.Direct и/или Google Adwords; таким образом,landing page готов принимать целевой трафик сразу после передачи клиенту.\"></process-item> </div> </div> </section>";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<figure class=process__item> <p class=process__item-num>этап</p> <div :class=\"'process__item-image process__item-image--' + image\"></div> <p class=process__item-title v-html=title></p> <p class=process__item-text v-html=text></p> </figure>";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<section class=sidebar> <p class=sidebar__city>Севастополь [[ year ]]</p> <address class=sidebar__social> <a href=# class=\"sidebar__social-button sidebar__social-button--fb\" target=_blank></a> <a href=# class=\"sidebar__social-button sidebar__social-button--in\" target=_blank></a> </address> </section>";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<footer class=site-footer> <div class=site-footer__row> <header class=site-footer__header> <div class=foter__content-wrap> <form class=site-footer__form data-form action=\"\"> <p class=site-footer__title>Давайте сотрудничать</p> <p class=site-footer__subtitle>Оставьте Ваш номер телефона и мы перезвоним:</p> <figure class=site-footer__form-success> <p class=\"site-footer__title site-footer__title--success\">Спасибо за ваше обращение</p> <p class=\"site-footer__subtitle site-footer__subtitle--success\">Мы перезвоним вам в самое ближайшее время!</p> </figure> <input type=text class=site-footer__form-input placeholder=\"+7 (495) 000-00-00\" required data-form-phone-field> <p data-form-status class=site-footer__form-status>Статус отправки</p> <button data-form-btn class=site-footer__form-button>Перезвоните мне</button> </form> </div> </header> </div> <div class=site-footer__row> <address class=site-footer__contacts> <div class=foter__content-wrap> <div class=site-footer__contacts-items> <a href=mailto:hello.krown.cc class=site-footer__email>HELLO@KROWN.CC</a> <span class=site-footer__city>Севастополь</span> <a href=tel:+74959899857 class=site-footer__phone>+7 (495) 989-98-57</a> </div> </div> </address> </div> </footer>";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<header class=site-header data-image=/assets/images/site-header-bgd.jpg> <div class=site-header__content-wrap> <div class=site-header__top> <a href=# class=site-header__logo></a> <address class=site-header__contacts> <a href=tel:+74959899857 class=site-header__phone>+7 (495) 989-98-57</a> <a href=mailto:hello@krown.cc class=site-header__mail>hello@krown.cc</a> </address> </div> <div class=site-header__middle> <hgroup class=site-header__heading> <p class=site-header__title>Разработка landing page</p> <p class=site-header__subtitle> Аналитический подход к конверсии <br>с премиальным дизайном </p> </hgroup> <div class=site-header__buttons> <button href=#tasks type=button class=site-header__readmore>Подробнее об услуге</button> <button href=#portfolio type=button class=site-header__show-cases>смотреть кейсы</button> </div> <div class=site-header__items-wrap> <figure class=\"site-header__item site-header__item--1\"> от 10 дней <br>на полный цикл </figure> <figure class=\"site-header__item site-header__item--2\"> от 45 000 <br>рублей </figure> <figure class=\"site-header__item site-header__item--3\"> Предоставляем <br>поддержку на всех <br>этапах </figure> <figure class=\"site-header__item site-header__item--4\"> Интегрируем <br>с amo.CRM </figure> </div> </div> </div> </header>";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<section class=specials> <div class=specials__content-wrap> <header class=specials__header> <p class=specials__title>Особенности нашей работы:</p> <p class=specials__subtitle>Почему вам стоит остановить свой выбор именно на нас</p> </header> <div class=specials__items-wrap> <figure class=specials__item> <p class=\"specials__item-title specials__item-title--1\">Штатные специалисты</p> <div class=\"specials__item-text typography\"> <p>Наше агентство полностью укомплектовано штатными специалистами. Работа в одном общем коллективе позволяет выпускать проекты высокого качества и соблюдать сроки на разработку проектов.</p> </div> </figure> <figure class=specials__item> <p class=\"specials__item-title specials__item-title--2\">Экспертиза</p> <div class=\"specials__item-text typography\"> <p>Все заявляют о том, что у них огромный опыт в разработке landing page. Мы начали заниматься этим в 2010 году, когда это еще не было мейнстримом в России. Ключевые сотрудники, отвечающие за качество и структуру LP, работают вместе с 2009 года. Весь опыт по данной тематике будет применен на вашем проекте.</p> </div> </figure> <figure class=specials__item> <p class=\"specials__item-title specials__item-title--3\">Гарантии/Обещания</p> <div class=\"specials__item-text typography\"> <p>Мы не даем никаких гарантий и обещаний по конверсии, продажам и.т.д., но всегда на этапе коммерческого предложения формируем для клиента информацию о том, какую минимальную эффективность может иметь проект. Это включает в себя следующие данные: <br>- конверсия в обращение/заявку; <br>- прогноз по привлечению трафика через Я.Директ; <br>- прогноз кол-ва обращений/заявок. </p> <p>Как правило, этих цифр достаточно чтобы оценить целесообразность разработки landing page.</p> </div> </figure> <figure class=specials__item> <p class=\"specials__item-title specials__item-title--4\">Безопасность</p> <div class=\"specials__item-text typography\"> <p>Вы можете быть спокойны за свои данные и коммерческую тайну, которую, скорее всего, мы узнаем в процессе интервью и формирования задач. Также, мы придерживаемся правила: не берем клиентов из конкурирующих компаний.</p> </div> </figure> </div> </div> </section>";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<section class=tasks id=tasks> <div class=tasks__content-wrap> <figure class=tasks__promo> <p class=tasks__promo-title>Для каких задач подойдет landing page?</p> <div class=\"tasks__promo-text typography\"> <p>Посадочная страница, как инструмент продаж, может быть крайне эффективна в ряде сценариев.</p> <p>Если Вы сомневаетесь в целесообразности разработки landing page конкретно для Вашего проекта - звоните, мы бесплатно проконсультируем и предложим альтернативные решения при необходимости.</p> </div> <a href=tel:+74959899857 class=tasks__promo-phone>+7 (495) 989-98-57</a> </figure> <ul class=tasks__list> <li class=\"tasks__list-item tasks__list-item--1\"> <p class=tasks__list-item-title>Проверить спрос </p> <p class=tasks__list-item-text>Landing page - отличный инструмент для теста спроса перед открытием нового направления в бизнесе</p> </li> <li class=\"tasks__list-item tasks__list-item--2\"> <p class=tasks__list-item-title>Продать товар или услугу</p> <p class=tasks__list-item-text>Посадочная страница <br>с понятным целевым действием более понятна пользователю, следовательно и конверсия в продажу выше</p> </li> <li class=\"tasks__list-item tasks__list-item--3\"> <p class=tasks__list-item-title>Провести&nbsp;a/b тестирование</p> <p class=tasks__list-item-text>С точки зрения тестирования - landing page это отработка гипотез с минимальными затратами на разработку в рамках уже функционирующих проектов</p> </li> </ul> </div> </section>";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener('DOMContentLoaded', function () {

    //плавающий
    // gridSidebar = function () {
    //     $('.grid__sidebar[data-sticky]').theiaStickySidebar({
    //         additionalMarginTop: 0,
    //         // minWidth: 1200
    //     });
    // };
    // gridSidebar();

});
document.addEventListener('DOMContentLoaded', function () {

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
Vue.component('cost', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(1)
});
Vue.component('cost-2', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(0),
    data: function data() {
        return {
            showLightbox: false
        };
    },
    mounted: function mounted() {
        /**
         * Выравнивание высот
         *
         * @param {string} node Элемент у которого нужно выровнять высоту
         */
        function normalizeHeight(node) {

            var maxColHeight = 0;

            $(node).height('auto');

            $(node).each(function () {
                if ($(this).height() > maxColHeight) {
                    maxColHeight = $(this).height();
                }
            });

            $(node).height(maxColHeight);
        }

        normalizeHeight('.cost-2__item-subtitle');
        $(window).resize(function () {
            normalizeHeight('.cost-2__item-subtitle');
        });
    }
});
Vue.component('cycle', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(2)
});
Vue.component('form-order', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(3)
});
Vue.component('lightbox', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(4)
});
Vue.component('portfolio-item', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(9),
    props: ['link', 'image', 'title', 'subtitle', 'conversion']
});

Vue.component('portfolio', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(8),
    data: function data() {
        return {
            visibility: false
        };
    }
});
Vue.component('portfolio-2-item-cost', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(6),
    props: ['summary', 'description']
});

Vue.component('portfolio-2-item', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(7),
    props: ['image', 'title', 'text', 'readmoreLink']
});

Vue.component('portfolio-2', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(5),
    data: function data() {
        return {
            visibility: false
        };
    },

    methods: {
        test: function test() {
            console.log('sadf');
        }
    }
});
Vue.component('process-item', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(11),
    props: ['image', 'title', 'text']
});
Vue.component('process', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(10)
});
Vue.component('sidebar', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(12),
    data: function data() {
        return {
            year: 2017
        };
    }
});
Vue.component('site-footer', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(13)
});
Vue.component('site-header', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(14),
    mounted: function mounted() {
        $('.site-header').parallax({
            imageSrc: $('.site-header').attr('data-image'),
            bleed: 20
        });
    }
});
Vue.component('specials', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(15)
});
Vue.component('tasks', {
    delimiters: ['[[', ']]'],
    template: __webpack_require__(16)
});
var App = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    name: 'App',
    data: {
        animateAnchors: true,
        animationsOnScholl: false,
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
                src: "/assets/images/theme-about.png",
                show: false,
                top: 0,
                left: -135,
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