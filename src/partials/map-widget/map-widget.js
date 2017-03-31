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
                    center: [44.58330422853194, 33.47989102536938],
                    zoom: 17,
                    controls: []
                }, {
                    searchControlProvider: 'yandex#search'
                });

                var placemark = new ymaps.Placemark([44.58330422853194, 33.48230501348279], {
                    hintContent: 'г. Севастополь, Фиолентовское шоссе, д.1',
                    balloonContent: 'KROWN'
                });

                map.geoObjects.add(placemark);

                map.behaviors.disable('scrollZoom')

            });
        });

    }
});