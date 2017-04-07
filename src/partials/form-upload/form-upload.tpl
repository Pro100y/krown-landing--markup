<form
    action = "/assets/forms/send-form.php"
    class  = "form-upload"
    data-form
>

    <ul class="form-upload__nav">
        <li class="form-upload__nav-item">МАКЕТЫ</li>
        <li class="form-upload__nav-item">ССЫЛКА</li>
    </ul>

    <section class="form-upload__tabs-wrap">

        <figure class="form-upload__tab">

            <file-upload @recalc-tab-heigth="heightFix();"></file-upload>

        </figure>

        <figure class="form-upload__tab">
            <input
                type="text"
                class="form-upload__link-field"
                name="link"
                placeholder="Укажите ссылку на скачаивание файлов проекта"
            >
        </figure>

    </section>

    <div class="form-upload__fields-wrap">
        <label for="" class="form-upload__label">ФИО:</label>
        <input
            type        = "text"
            class       = "form-upload__input"
            name        = "name"
            placeholder = "Ваше имя"
        >
        <label for="" class="form-upload__label">Электронная почта*:</label>
        <input
            type        = "text"
            class       = "form-upload__input"
            name        = "email"
            placeholder = "Ваш email"
            required
        >
        <p class="form-upload__status" data-form-status>Пожалуйста, укажите электронную почту</p>
        <label for="" class="form-upload__label">Скайп:</label>
        <input
            type        = "text"
            class       = "form-upload__input"
            name        = "skype"
            placeholder = "Ваш скайп-логин"
        >
        <label for="" class="form-upload__label">Номер телефона*:</label>
        <input
            type        = "text"
            class       = "form-upload__input"
            name        = "phone"
            placeholder = "+7 (___) ___-__-__"
            data-form-phone-field
            required
        >
        <p class="form-upload__status" data-form-status>Пожалуйста, укажите номер телефона</p>

        <button class="form-upload__send" data-form-btn>заказать верстку</button>

    </div>

</form>