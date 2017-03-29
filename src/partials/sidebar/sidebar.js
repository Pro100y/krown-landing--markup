Vue.component('sidebar', {
    delimiters: ['[[', ']]'],
    template: require('./sidebar/sidebar.htm'),
    data() {
        return {
            year: 2017
        }
    },
    // created() {
    //     // this.year = new Date(year)
    // }
});