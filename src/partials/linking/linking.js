Vue.component('linking', {
    delimiters: ['[[', ']]'],
    template: require('./linking/linking.tpl'),
    data() {
        return {
            showModal: false
        }
    },
    computed: {
        year() {
            var currentYear = new Date();
            return currentYear.getFullYear();
        }
    },
    methods: {
        changeScroll: function () {
            if (this.showModal === true) {
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
    }
});