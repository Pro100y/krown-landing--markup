<figure
    class="projects__gallery-item"
    data-transition-off
>
    <div
        class  = "projects__gallery-item-content-wrap"
        @click = "showWorkFrame = true; changeScroll();"
    >
        <img
            :src  = "image"
            :alt  = "title"
            class = "projects__gallery-item-image"
            data-adaptive-background
        >
        <p class="projects__gallery-item-suptitle">[[ suptitle ]]</p>
        <p class="projects__gallery-item-title">[[ title ]]</p>
    </div>

    <work-frame
        v-if   = "showWorkFrame"
        @close = "showWorkFrame = false; changeScroll();"
        :href  = "link"
        :type  = "suptitle"
        :name  = "title"
    ></work-frame>

</figure>