Vue.component('portfolio-2-item-cost', {
    delimiters: ['[[', ']]'],
    template: require('./portfolio-2/portfolio-2__item-cost.htm'),
    props: [
        'summary',
        'description'
    ]
});

Vue.component('portfolio-2-item', {
    delimiters: ['[[', ']]'],
    template: require('./portfolio-2/portfolio-2__item.htm'),
    props: [
        'image',
        'title',
        'text',
        'readmoreLink',
    ]
});

Vue.component('portfolio-2', {
    delimiters: ['[[', ']]'],
    template: require('./portfolio-2/portfolio-2.htm'),
    data() {
        return {
            visibility: false
        }
    },
    methods: {
        test() {
            console.log('sadf');
        }
    }
});