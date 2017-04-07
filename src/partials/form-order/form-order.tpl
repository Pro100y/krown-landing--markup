<form
    class  = "form-order"
    action = "/assets/forms/send-form.php"
    :title = "'Заказать лендинг с адреса: ' + location"
    data-form
>

    <header class="form-order__title">Заказать лендинг</header>
    <p class="form-order__subtitle">Оставьте Ваш номер телефона и мы перезвоним:</p>

    <figure class="form-order__items-wrap form-order__items-wrap--order">

        <div class="form-order__fields">
            <label for="" class="form-order__label">Ваше имя:</label>
            <input
                type="text"
                class="form-order__input"
                name="ff1"
                placeholder="Введите ваше имя"
            >
            <label for="" class="form-order__label">Номер телефона*:</label>
            <input
                type="text"
                class="form-order__input"
                placeholder="+7 (495) 000-00-00"
                name="ff2"
                data-form-phone-field
                required
            >
            <p class="form-order__status" data-form-status></p>
        </div>

        <figcaption class="form-order__caption">
            <p class="form-order__caption-title">тариф:</p>
            <p class="form-order__plan">[[ plan ]]</p>
            <p class="form-order__plan-description">[[ planDescription ]]</p>
            <p class="form-order__cost">
                от
                <br>[[ cost ]] руб.
            </p>
        </figcaption>

        <button class="form-order__order" data-form-btn>Оформить заказ</button>

    </figure>

    <figure class="form-order__items-wrap form-order__items-wrap--success">

        <header class="form-order__success-title">Спасибо за ваш заказ!</header>
        <p class="form-order__success-subtitle">Мы перезвоним вам в самое ближайшее время!</p>
        <a href="tel:+74959899857" class="form-order__success-phone">+7 (495) 989-98-57</a>

    </figure>

</form>