Vue.component('file-upload', {
    delimiters: ['[[', ']]'],
    template: require('./file-upload/file-upload.htm'),
    data() {
        return {
            showCancelAllButton: false,
            showItemsTitle: false,
        }
    },
    mounted: function () {

        let vm = this;

        //file upload
        $(".upload")
            .upload({
                maxSize: 1073741824,
                beforeSend: onBeforeSend,
                label: ''
            })
            .on("start.upload", onStart)
            .on("complete.upload", onComplete)
            .on("filestart.upload", onFileStart)
            .on("fileprogress.upload", onFileProgress)
            .on("filecomplete.upload", onFileComplete)
            .on("fileerror.upload", onFileError)
            .on("chunkstart.upload", onChunkStart)
            .on("chunkprogress.upload", onChunkProgress)
            .on("chunkcomplete.upload", onChunkComplete)
            .on("chunkerror.upload", onChunkError)
            .on("queued.upload", onQueued);
        $(".file-upload__list--progress").on("click", ".cancel", onCancel);
        $(".cancel_all").on("click", onCancelAll);


        function onCancel(e) {
            console.log("Cancel");
            var index = $(this).parents("li").data("index");
            $(this).parents("form").find(".upload").upload("abort", parseInt(index, 10));
        }

        function onCancelAll(e) {
            console.log("Cancel All");
            $(this).parents("form").find(".upload").upload("abort");
            $(this).parents("form").find(".file-upload__list--done").html("");
            $(this).parents("form").find(".file-upload__list--progress").html("");
        }

        function onBeforeSend(formData, file) {
            console.log("Before Send");
            formData.append("test_field", "test_value");
            // return (file.name.indexOf(".jpg") < -1) ? false : formData; // cancel all jpgs
            return formData;
        }

        function onQueued(e, files) {
            console.log("Queued");
            var html = '';
            for (var i = 0; i < files.length; i++) {
                html += '<li data-file="' + files[i].name + '" data-index="' + files[i].index + '"><span class="content"><span class="file">' + files[i].name + '</span><span class="cancel">Отмена</span><span class="progress">Queued</span></span><span class="file-upload__bar"></span></li>';
            }
            $(this).parents("form").find(".file-upload__list--progress")
                .append(html);
        }

        function onStart(e, files) {
            console.log("Start");
            vm.showItemsTitle = true;
            vm.$emit('recalc-tab-heigth');
            $(this).parents("form").find(".file-upload__list--progress")
                .find("li")
                .find(".progress").text("Waiting");
        }

        function onComplete(e) {
            console.log("Загрузка файлов завершена.");
            // All done!
        }

        function onFileStart(e, file) {
            console.log("File Start");
            $(this).parents("form").find(".file-upload__list--progress")
                .find("li[data-index=" + file.index + "]")
                .find(".progress").text("0%");
        }

        function onFileProgress(e, file, percent) {
            console.log("File Progress");
            var $file = $(this).parents("form").find(".file-upload__list--progress").find("li[data-index=" + file.index + "]");
            $file.find(".progress").text(percent + "%")
            $file.find(".file-upload__bar").css("width", percent + "%");
        }

        function onFileComplete(e, file, response) {
            console.log("File Complete");
            if (response.trim() === "" || response.toLowerCase().indexOf("error") > -1) {
                $(this).parents("form").find(".file-upload__list--progress")
                    .find("li[data-index=" + file.index + "]").addClass("error")
                    .find(".progress").text(response.trim());
            } else {
                var $target = $(this).parents("form").find(".file-upload__list--progress").find("li[data-index=" + file.index + "]");
                $target.find(".file").text(file.name);
                $target.find(".progress").remove();
                $target.find(".cancel").remove();
                $target.appendTo($(this).parents("form").find(".file-upload__list--done"));
            }
        }

        function onFileError(e, file, error) {
            console.log("File Error");
            $(this).parents("form").find(".file-upload__list--progress")
                .find("li[data-index=" + file.index + "]").addClass("error")
                .find(".progress").text("Error: " + error);
        }

        function onChunkStart(e, file) {
            console.log("Chunk Start");
        }

        function onChunkProgress(e, file, percent) {
            console.log("Chunk Progress");
        }

        function onChunkComplete(e, file, response) {
            console.log("Chunk Complete");
        }

        function onChunkError(e, file, error) {
            console.log("Chunk Error");
        }
    }
});