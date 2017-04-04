Vue.component('quality-item', {
    delimiters: ['[[', ']]'],
    template: require('./quality/quality__item.htm'),
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
    mounted: function () {

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
    template: require('./quality/quality.htm'),
    data() {
        return {
            readmore: false,
            device: ''
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
    mounted: function () {

        var vm = this;

        vm.device = vm.detectDevice();

        window.addEventListener('resize', function () {
            vm.device = vm.detectDevice();
        });
    }
});