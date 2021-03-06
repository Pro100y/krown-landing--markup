<figure class = "quality__item">
    <div
        class="quality__item-content-wrap"
        @click = "showWorkFrame = true; changeScroll();"
    >
        <img
            :src  = "image"
            :alt  = "title"
            class = "quality__item-image"
            data-adaptive-background
        >
        <p class="quality__item-suptitle">[[ suptitle ]]</p>
        <p class="quality__item-title">[[ title ]]</p>
    </div>

    <work-frame
        v-if   = "showWorkFrame"
        @close = "showWorkFrame = false; changeScroll();"
        :href  = "link"
        :type  = "suptitle"
        :name  = "title"
    ></work-frame>

</figure>