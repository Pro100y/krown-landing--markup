
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
Vue.component('about-us', {
    delimiters: ['[[', ']]'],
    template: require('./about-us/about-us.htm')
});
Vue.component('advantages-tab', {
    delimiters: ['[[', ']]'],
    template: require('./advantages/advantages__tab.htm'),
    props: ['promoTitle', 'promoText', 'content']
});

Vue.component('advantages', {
    delimiters: ['[[', ']]'],
    template: require('./advantages/advantages.htm'),
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
    template: require('./contacts/contacts.htm')
});
Vue.component('experience', {
    delimiters: ['[[', ']]'],
    template: require('./experience/experience.htm')
});
Vue.component('faq', {
    delimiters: ['[[', ']]'],
    template: require('./faq/faq.htm'),
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
    template: require('./form-order/form-order.htm'),
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
    template: require('./form-question/form-question.htm'),
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
Vue.component('keys', {
    delimiters: ['[[', ']]'],
    template: require('./keys/keys.htm')
});
Vue.component('lightbox', {
    delimiters: ['[[', ']]'],
    template: require('./lightbox/lightbox.htm')
});
Vue.component('linking', {
    delimiters: ['[[', ']]'],
    template: require('./linking/linking.htm'),
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
    template: require('./map-widget/map-widget.htm'),
    props: ['address'],
    mounted: function mounted() {

        var query = this.address;

        // Yandex Map
        document.addEventListener('DOMContentLoaded', function () {

            ymaps.ready().done(function (ym) {
                var map = new ym.Map('map-widget', {
                    center: [44.58330422853194, 33.47989102536938],
                    zoom: 17,
                    controls: []
                }, {
                    searchControlProvider: 'yandex#search'
                });

                var placemark = new ymaps.Placemark([44.58330422853194, 33.48230501348279], {
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
    template: require('./navigation/navigation.htm')
});
Vue.component('projects-gallery-item', {
    delimiters: ['[[', ']]'],
    template: require('./projects/projects__gallery-item.htm'),
    props: ['link', 'image', 'suptitle', 'title'],
    mounted: function mounted() {
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
    template: require('./projects/projects.htm'),
    mounted: function mounted() {

        var $grid = $('.projects__gallery-items-wrap').isotope({
            itemSelector: '.projects__gallery-item'
        });
        $('.projects__gallery-nav').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        $('.projects__gallery-nav-item').click(function () {
            $('.projects__gallery-nav-item--active').removeClass('projects__gallery-nav-item--active');
            $(this).addClass('projects__gallery-nav-item--active');
        });
    }
});
Vue.component('promo', {
    delimiters: ['[[', ']]'],
    template: require('./promo/promo.htm')
});
Vue.component('quality-item', {
    delimiters: ['[[', ']]'],
    template: require('./quality/quality__item.htm'),
    props: ['link', 'image', 'suptitle', 'title'],
    mounted: function mounted() {
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
    template: require('./quality/quality.htm'),
    data: function data() {
        return {
            readmore: false
        };
    }
});
Vue.component('site-footer', {
    delimiters: ['[[', ']]'],
    template: require('./site-footer/site-footer.htm'),
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
    template: require('./special/special.htm')
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
        pixelPerfect: true,
        rippleEffect: false,
        tooltips: false
    },
    methods: {
        pixlayout: function pixlayout() {
            $.pixlayout({
                src: "/assets/images/theme-contacts--960.png",
                show: false,
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