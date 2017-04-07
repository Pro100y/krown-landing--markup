<transition name="work-frame--animation-">

    <section class="work-frame">
        <header class="work-frame__header">
            <nav class="work-frame__content-wrap">
                <button
                    class       = "work-frame__back"
                    type        = "button"
                    @click.self = "$emit('close');"
                >Назад к списку работ</button>
                <span class="work-frame__info">Проект: [[ type ]] [[ name ]]</span>
            </nav>
        </header>
        <iframe
            class="work-frame__iframe"
            :src="href"
        ></iframe>
    </section>

</transition>
