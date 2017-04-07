Vue.component('navigation', {
    delimiters: ['[[', ']]'],
    template: require('./navigation/navigation.tpl'),
    computed: {
        currentPage: function () {
            if (document.querySelectorAll('[data-page="home"]').length) {
                return 'home';
            } else if (document.querySelectorAll('[data-page="about-us"]').length) {
                return 'about-us';
            } else if (document.querySelectorAll('[data-page="outsource"]').length) {
                return 'outsource';
            } else if (document.querySelectorAll('[data-page="projects"]').length) {
                return 'projects';
            } else if (document.querySelectorAll('[data-page="contacts"]').length) {
                return 'contacts';
            } else {
                console.warn('Текущая страница неопределена.');
            }
        }
    }
});