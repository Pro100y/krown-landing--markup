Vue.component('work-frame', {
    delimiters: ['[[', ']]'],
    template: require('./work-frame/work-frame.tpl'),
    props: [
        'href',
        'type',
        'name'
    ]
});