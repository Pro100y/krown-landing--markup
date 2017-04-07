Vue.component('form-upload', {
    delimiters: ['[[', ']]'],
    template: require('./form-upload/form-upload.tpl'),
    methods: {
        //фикс начальной высоты табов
        heightFix: function () {
            setTimeout(function () {
                $(".form-upload .js-tabs-height")
                    .height($(".form-upload__tab.active").outerHeight());
                console.info('Перерасчитана высота активного таба');
            }, 0);
        }
    },
    mounted() {
        var vm = this;
        $('.form-upload').tabtab({
            tabMenu: '.form-upload__nav', // direct container of the tab menu items
            tabContent: '.form-upload__tabs-wrap', // direct container of the tab content items

            startSlide: 1, // starting slide on pageload
            arrows: true, // keyboard arrow navigation
            // dynamicHeight: false, // if true the height will dynamic and animated.
            fixedHeight: false, // if true the height will dynamic and animated.
            useAnimations: true, // disables animations.

            easing: 'ease', // http://julian.com/research/velocity/#easing
            speed: 1000, // animation speed
            slideDelay: 0, // delay the animation
            perspective: 1200, // set 3D perspective
            transformOrigin: 'center top', // set the center point of the 3d animation
            perspectiveOrigin: '50% 50%', // camera angle

            translateY: 0, // animate along the Y axis (val: px or ‘slide’)
            translateX: 30, // animate along the X axis (val: px or ‘slide’)
            scale: 1, // animate scale (val: 0-2)
            rotateX: 0, // animate rotation (val: 0deg-360deg)
            rotateY: 0, // animate Y acces rotation (val: 0deg-360deg)
            skewY: 0, // animate Y skew (val: 0deg-360deg)
            skewX: 0, // animate X skew (val: 0deg-360deg)
        });


        vm.heightFix();
        $(window).resize(function () {
            vm.heightFix();
        });

    }
});