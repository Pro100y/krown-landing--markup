Vue.component('work-frame', {
    delimiters: ['[[', ']]'],
    template: require('./work-frame/work-frame.htm'),
    props: [
        'href',
        'type',
        'name'
    ]
});