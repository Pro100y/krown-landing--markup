<section class="linking">
    <button
        class="linking__button"
        :class="{ 'linking__button--active' : showModal}"
        @click="showModal=!showModal; changeScroll();"
    ></button>

    <transition name="linking--animation-">

        <figure class="linking__modal" v-show="showModal">

            <div class="linking__modal-content-wrap">

                <header class="linking__modal-header">
                    <div class="linking__modal-header-col"></div>
                    <div class="linking__modal-header-col">
                        <a href="" class="linking__modal-logo"></a>
                    </div>
                    <div class="linking__modal-header-col">
                        <a href="tel:+74951182373" class="linking__modal__phone">+7 (495) 118 23 73</a>
                    </div>
                </header>

                <p class="linking__modal-title">оказываем услуги:</p>

                <div class="linking__modal-items-wrap">
                    <a href="http://landing.krown.cc" class="linking__modal-item linking__modal-item--1">Разработка landing page</a>
                    <a href="http://verstka.krown.cc" class="linking__modal-item linking__modal-item--2">Верстка дизайн-макетов</a>
                    <a href="http://support.krown.cc" class="linking__modal-item linking__modal-item--3">
                        Поддержка сайтов
                        <br>на 1С-Битрикс</a>
                </div>

                <footer class="linking__modal-footer">Севастополь [[ year ]]</footer>

            </div>

        </figure>

    </transition>

</section>