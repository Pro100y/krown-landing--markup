Vue.component('quality-item', {
    delimiters: ['[[', ']]'],
    template: require('./quality/quality__item.htm'),
    props: [
        'link',
        'image',
        'suptitle',
        'title'
    ],
    mounted() {
        $.adaptiveBackground.run({
            selector: '[data-adaptive-background]',
            parent: null,
            exclude: ['rgb(0,0,0)', 'rgba(255,255,255)'],
            normalizeTextColor: true,
            normalizedTextColors: {
                light: "#fff",
                dark: "#333"
            },
            lumaClasses: {
                light: "ab-light",
                dark: "ab-dark"
            }
        });
    }
});

Vue.component('quality', {
    delimiters: ['[[', ']]'],
    template: require('./quality/quality.htm'),
    data() {
        return {
            readmore: false
        }
    }
});