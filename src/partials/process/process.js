Vue.component('process-item', {
    delimiters: ['[[', ']]'],
    template: require('./process/process__item.htm'),
    props: [
        'image',
        'title',
        'text'
    ]
});
Vue.component('process', {
    delimiters: ['[[', ']]'],
    template: require('./process/process.htm')
});