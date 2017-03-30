Vue.component('form-question', {
    delimiters: ['[[', ']]'],
    template: require('./form-question/form-question.htm'),
    computed: {
        location: function () {
            return location.href;
        }
    }
});