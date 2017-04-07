<section class="faq">
    <header class="faq__title">Краткий FAQ</header>
    <ul class="faq__list" data-accordion-group>
        <li
            class = "faq__list-item"
            v-for = "item in faq.items"
            data-accordion
        >
            <p class="faq__list-item-title" data-control>[[ item.title ]]</p>
            <figure class="faq__list-item-content-wrap" data-content>
                <figcaption class="faq__list-item-content">[[ item.text ]]</figcaption>
            </figure>

        </li>
    </ul>
</section>