<transition name="lightbox--animation-">

    <section class="lightbox" @click.self="$emit('close')">

        <figure class="lightbox__container">

            <button class="lightbox__close" @click="$emit('close')"></button>

            <slot name="lightbox__container">Содержимое лайтбокса</slot>

        </figure>

    </section>

</transition>