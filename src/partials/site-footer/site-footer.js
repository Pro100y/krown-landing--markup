Vue.component('site-footer', {
    delimiters: ['[[', ']]'],
    template: require('./site-footer/site-footer.htm'),
    computed: {
        location: function () {
            return location.href;
        }
    }
});