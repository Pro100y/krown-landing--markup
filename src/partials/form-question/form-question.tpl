<form
    class  = "form-question"
    action = "/assets/forms/send-form.php"
    :title = "'Остались вопросы? с адреса: ' + location"
    data-form
>

    <figure class="form-question__success">
        <div class="form-question__success-content-wrap">
            <p class="form-question__title form-question__title--success">Спасибо за ваше обращение</p>
            <p class="form-question__subtitle form-question__subtitle--success">Мы перезвоним вам в самое ближайшее время!</p>
        </div>
    </figure>

    <p class="form-question__title">Остались вопросы?</p>
    <p class="form-question__subtitle">Оставьте Ваш номер телефона и мы перезвоним с бесплатной консультацией:</p>

    <div class="form-question__input-wrap">
        <input
            type        = "text"
            class       = "form-question__input"
            placeholder = "+7 (___) ___-__-__"
            name        = "ff1"
            required
            data-form-phone-field
        >
        <button data-form-btn class="form-question__button"></button>
    </div>

    <p data-form-status class="form-question__status">Статус отправки</p>

    <p class="form-question__description">Или звоните нам по номеру +7 (495) 118 23 73</p>

</form>