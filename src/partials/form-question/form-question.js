Vue.component('form-question', {
    delimiters: ['[[', ']]'],
    template: require('./form-question/form-question.tpl'),
    computed: {
        location: function () {
            return location.href;
        }
    }
});