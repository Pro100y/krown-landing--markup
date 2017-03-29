Vue.component('cost-2', {
    delimiters: ['[[', ']]'],
    template: require('./cost-2/cost-2.htm'),
    data() {
        return {
            showLightbox: false
        }
    },
    mounted() {
        /**
         * Выравнивание высот
         *
         * @param {string} node Элемент у которого нужно выровнять высоту
         */
        function normalizeHeight(node) {

            var maxColHeight = 0;

            $(node).height('auto');

            $(node).each(function () {
                if ($(this).height() > maxColHeight) {
                    maxColHeight = $(this).height();
                }
            });

            $(node).height(maxColHeight);
        }

        normalizeHeight('.cost-2__item-subtitle');
        $(window).resize(function () {
            normalizeHeight('.cost-2__item-subtitle');
        });
    }
});