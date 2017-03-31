Vue.component('projects-gallery-item', {
    delimiters: ['[[', ']]'],
    template: require('./projects/projects__gallery-item.htm'),
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

Vue.component('projects', {
    delimiters: ['[[', ']]'],
    template: require('./projects/projects.htm'),
    mounted() {

        var $grid = $('.projects__gallery-items-wrap').isotope({
            itemSelector: '.projects__gallery-item',
        });
        $('.projects__gallery-nav').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        $('.projects__gallery-nav-item').click(function () {
            $('.projects__gallery-nav-item--active').removeClass('projects__gallery-nav-item--active');
            $(this).addClass('projects__gallery-nav-item--active');
        });

    }
});