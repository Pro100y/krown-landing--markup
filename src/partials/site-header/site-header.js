Vue.component('site-header', {
    delimiters: ['[[', ']]'],
    template: require('./site-header/site-header.htm'),
    mounted: function () {
        $('.site-header').parallax({
            imageSrc: $('.site-header').attr('data-image'),
            bleed: 20
        });
    }
});