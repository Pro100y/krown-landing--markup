Vue.component('map-widget', {
    delimiters: ['[[', ']]'],
    template: require('./map-widget/map-widget.htm'),
    props: [
        'address'
    ],
    mounted: function () {

        var query = this.address;

        // Yandex Map
        document.addEventListener('DOMContentLoaded', function () {

            ymaps.ready().done(function (ym) {
                var map = new ym.Map('map-widget', {
                    center: [44.584508154698284,33.48243169524696],
                    zoom: 17,
                    controls: []
                }, {
                    searchControlProvider: 'yandex#search'
                });

                var placemark = new ymaps.Placemark([44.583342702721794,33.48246388175512], {
                    hintContent: 'г. Севастополь, Фиолентовское шоссе, д.1',
                    balloonContent: 'KROWN'
                });

                map.geoObjects.add(placemark);

                map.behaviors.disable('scrollZoom')

            });
        });

    }
});