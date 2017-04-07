Vue.component('site-footer', {
    delimiters: ['[[', ']]'],
    template: require('./site-footer/site-footer.tpl'),
    computed: {
        location: function () {
            return location.href;
        }
    }
});