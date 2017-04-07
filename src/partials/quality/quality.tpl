<section class="quality" id="quality">
    <div class="quality__content-wrap">
        <header class="quality__title">Качество нашей верстки говорит за себя</header>
        <p class="quality__subtitle">Стабильность исполнения на высоком уровне позволяет нашим постоянным клиентам всегда быть уверенными в результате</p>
        <div class="quality__items-wrap">

            <quality-item
                link     = "https://coolors.co/899e8b-99c5b5-afece7-81f499-666b6a"
                image    = "/assets/images/quality-1.jpg"
                suptitle = "Интернет-магазин"
                title    = "Gold Dragon Profit"
            ></quality-item>

            <quality-item
                link     = "http://bugmenot.com/"
                image    = "/assets/images/quality-2.jpg"
                suptitle = "Landing page"
                title    = "Stropuva"
            ></quality-item>

            <quality-item
                v-if     = "device == 'laptop'"
                link     = "https://habrastorage.org/"
                image    = "/assets/images/quality-3.jpg"
                suptitle = "Интернет-магазин"
                title    = "Viessmann"
            ></quality-item>

            <quality-item
                v-if     = "device == 'laptop'"
                link     = "https://coolors.co/899e8b-99c5b5-afece7-81f499-666b6a"
                image    = "/assets/images/quality-4.jpg"
                suptitle = "Landing page"
                title    = "Москлимат: Кондиционирование"
            ></quality-item>

            <button
                class="quality__readmore"
                v-show="!readmore"
                @click="readmore = true"
            >полный список работ</button>

            <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
            >
                <section class  ="quality__readmore-items-wrap"
                         v-show = "readmore">

                    <quality-item
                        link     = "http://landing.dev.krown.cc/pages/1.home.html"
                        image    = "/assets/images/quality-1.jpg"
                        suptitle = "Интернет-магазин"
                        title    = "Gold Dragon Profit"
                    ></quality-item>

                    <quality-item
                        link     = "http://content.dev.krown.cc/pages/1.home.html"
                        image    = "/assets/images/quality-2.jpg"
                        suptitle = "Landing page"
                        title    = "Stropuva"
                    ></quality-item>

                    <quality-item
                        link     = "http://krimgrad.dev.krown.cc/pages/1.home.html"
                        image    = "/assets/images/quality-3.jpg"
                        suptitle = "Интернет-магазин"
                        title    = "Viessmann"
                    ></quality-item>

                    <quality-item
                        link     = "http://krimgrad.dev.krown.cc/pages/9.filter.html"
                        image    = "/assets/images/quality-4.jpg"
                        suptitle = "Landing page"
                        title    = "Москлимат: Кондиционирование"
                    ></quality-item>

                </section>

            </transition>

        </div>
    </div>
</section>