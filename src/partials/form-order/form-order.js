Vue.component('form-order', {
    delimiters: ['[[', ']]'],
    template: require('./form-order/form-order.tpl'),
    props: [
        'plan',
        'planDescription',
        'cost'
    ],
    computed: {
        location: function () {
            return location.href;
        }
    }
});