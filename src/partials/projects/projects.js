Vue.component('projects-gallery-item', {
    delimiters: ['[[', ']]'],
    template: require('./projects/projects__gallery-item.tpl'),
    data() {
        return {
            showWorkFrame: false
        }
    },
    props: [
        'link',
        'image',
        'suptitle',
        'title'
    ],
    methods: {
        changeScroll: function () {
            if (this.showWorkFrame === true) {
                $('html')
                    .attr('data-lock-scroll', '')
                    .css({
                        'paddingRight': '15px'
                    });
            } else {
                setTimeout(function () {
                    $('html')
                        .removeAttr('data-lock-scroll')
                        .css({
                            'paddingRight': '0px'
                        });
                }, 500);
            }

        }
    },
    mounted() {

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
    data() {
        return {
            device: 'laptop'
        }
    },
    methods: {
        detectDevice() {
            if ($(window).width() >= 960) {
                return 'laptop';
            } else {
                return 'mobile';
            }
        }
    },
    mounted() {

        var vm = this;

        // определяем устройство клиента
        vm.device = vm.detectDevice();

        window.addEventListener('resize', function () {
            vm.device = vm.detectDevice();
        });

        document.addEventListener('DOMContentLoaded', function () {

            // инициализируем сетку
            var $grid = $('.projects__gallery-items-wrap').isotope({
                itemSelector: '.projects__gallery-item',
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