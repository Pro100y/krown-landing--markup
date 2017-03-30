Vue.component('faq', {
    delimiters: ['[[', ']]'],
    template: require('./faq/faq.htm'),
    data() {
        return {
            faq: {
                items: [{
                    title: 'Когда сможете приступить?',
                    text: 'На следующий рабочий день после получения предоплаты.',
                }, {
                    title: 'Как будет происходить коммуникация?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quaerat delectus reprehenderit maiores, ex ipsam magni saepe minus voluptatibus rerum, quo magnam est, expedita ut sint sed vero sit doloribus.',
                }, {
                    title: 'Как можно оплатить?',
                    text: 'Similique illo accusamus, quae nulla consectetur, obcaecati labore aspernatur eveniet, tempora in enim voluptatibus dolor sunt a nobis. Saepe beatae harum doloremque velit, dignissimos asperiores iste provident. Molestiae, iusto ducimus.',
                }, {
                    title: 'В каком виде я получу результат?',
                    text: 'Optio accusantium eos doloremque, fugiat adipisci molestiae voluptates expedita omnis modi amet odit architecto accusamus. Explicabo distinctio eum deserunt accusantium totam? Ut, dolorem iure recusandae quae suscipit corporis ea repellendus.',
                }]
            }
        }
    },
    mounted() {
        // аккордеон
        $('.faq [data-accordion]:first').addClass('open');
        $('.faq [data-accordion]').accordion({
            transitionSpeed: 1000
        });
    }
});