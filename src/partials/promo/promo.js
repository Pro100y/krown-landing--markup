Vue.component('promo', {
    delimiters: ['[[', ']]'],
    template: require('./promo/promo.tpl'),
    data() {
        return {
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