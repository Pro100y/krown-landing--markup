
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
    template: require('./about-us/about-us.tpl')
});
Vue.component('advantages-tab', {
    delimiters: ['[[', ']]'],
    template: require('./advantages/advantages__tab.tpl'),
    props: ['promoTitle', 'promoText', 'content']
});

Vue.component('advantages', {
    delimiters: ['[[', ']]'],
    template: require('./advantages/advantages.tpl'),
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
    template: require('./contacts/contacts.tpl')
});
Vue.component('experience', {
    delimiters: ['[[', ']]'],
    template: require('./experience/experience.tpl')
});
Vue.component('faq', {
    delimiters: ['[[', ']]'],
    template: require('./faq/faq.tpl'),
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
    template: require('./file-upload/file-upload.tpl'),
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
    template: require('./form-order/form-order.tpl'),
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
    template: require('./form-question/form-question.tpl'),
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
    template: require('./form-upload/form-upload.tpl'),
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
    template: require('./keys/keys.tpl')
});
Vue.component('lightbox', {
    delimiters: ['[[', ']]'],
    template: require('./lightbox/lightbox.tpl')
});
Vue.component('linking', {
    delimiters: ['[[', ']]'],
    template: require('./linking/linking.tpl'),
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
    template: require('./map-widget/map-widget.tpl'),
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
    template: require('./navigation/navigation.tpl'),
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
    template: require('./order/order.tpl')
});
Vue.component('projects-gallery-item', {
    delimiters: ['[[', ']]'],
    template: require('./projects/projects__gallery-item.tpl'),
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
    template: require('./projects/projects.tpl'),
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
    template: require('./promo/promo.tpl'),
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
    template: require('./quality/quality__item.tpl'),
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
    template: require('./quality/quality.tpl'),
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
    template: require('./site-footer/site-footer.tpl'),
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
    template: require('./special/special.tpl')
});
Vue.component('work-frame', {
    delimiters: ['[[', ']]'],
    template: require('./work-frame/work-frame.tpl'),
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