<section class="file-upload">

    <figure class="file-upload__dropzone / upload">
        <p class="file-upload__dropzone-title">Перетащите файлы проекта сюда</p>
        <p class="file-upload__dropzone-subtitle">
            Вы можете приложить исходники макетов, экспорты,
            <br>а так же дополнительное тех задание по верстке если оно у вас есть
        </p>
    </figure>

    <div class="file-upload__items-wrap">
        <p class="file-upload__items-title" v-show="showItemsTitle">Вы загрузили:</p>
        <ol class="file-upload__list file-upload__list--done / filelist complete"></ol>
        <ol class="file-upload__list file-upload__list--progress / filelist queue"></ol>
        <button
            type  = "button"
            class = "file-upload__cancel-all / cancel_all"
            v-if  = "showCancelAllButton"
        >Отменить загрузку</button>
    </div>

</section>
