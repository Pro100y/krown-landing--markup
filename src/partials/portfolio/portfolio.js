Vue.component('portfolio-item', {
    delimiters: ['[[', ']]'],
    template: require('./portfolio/portfolio__item.htm'),
    props: [
        'link',
        'image',
        'title',
        'subtitle',
        'conversion'
    ]
});

Vue.component('portfolio', {
    delimiters: ['[[', ']]'],
    template: require('./portfolio/portfolio.htm'),
    data() {
        return {
            visibility: false
        }
    }
});