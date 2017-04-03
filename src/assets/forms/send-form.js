document.addEventListener('DOMContentLoaded', function () {

    /*
    |--------------------------------------------------------------------------
    | SEND FORM
    |--------------------------------------------------------------------------
    |
    | Валидация полей и отправка формы
    |
    */

    // устанока маски на поля
    $('[data-form-phone-field]').mask("+7 (999) 999-99-99");
    $('[data-form-time-field]').mask("99:99");


    $('[data-form-btn]').click(function () {
        var $b = $(this);
        var $f = $(this).parents('[data-form]');
        var $s = $f.find('[data-form-status]');
        var data = {};

        var action = $f.attr('action') || '/assets/forms/send-form.php';
        var senderUrl = location.href;

        // узнаем адрес получателя и цели метрики каждой формы
        var mailAddr = "ljazzmail@gmail.com";
        var reachGoalTarget = $f.attr('data-form-target');

        var bVal = $b.text();

        var status = [
            'Пожалуйста, укажите номер телефона',
            'Спасибо, сообщение отправлено',
            'При отправке сообщения возникли проблемы. Пожалуйста, отправьте письмо на ящик ' + mailAddr
        ]

        // тряска формы если не проходим валидацию при отправке
        $f.find('*[required]').each(function () {
            $(this).removeAttr('data-form-field-invalid');
            if ($(this).val() == '' || $(this).val() == $(this).attr('placeholder')) {
                $(this).attr('data-form-field-invalid', '')
                $f.find('[data-form-field-invalid]')
                    .addClass('shake animated');
                setTimeout(function () {
                    $f.find('[data-form-field-invalid]')
                        .removeClass('shake animated');
                }, 1000);
            }
        });

        // если есть поля с ошибками то сообщаем об этом пользователю
        if ($f.find('[data-form-field-invalid]').length) {
            $f.find(':not([data-form-field-invalid]) + [data-form-status]').slideUp(500);
            $f.find('[data-form-field-invalid] + [data-form-status]').slideDown(500);
            return false;
        }

        // собираем содержимое полей
        $f.find('input, textarea, select').each(function (i) {
            var name = $(this).attr('name');
            var label = $(this).attr('placeholder') || $(this).prev().html();
            label = $.trim(label.replace(/[:*]/g, ''));
            data[name] = {
                label: label,
                value: $(this).val()
            };
        });

        // отправка формы
        $.ajax({
            url: action,
            type: 'POST',
            data: {
                send: 'do',
                to: mailAddr,
                subj: $f.attr('title'),
                data: data,
                senderUrl: senderUrl
            },
            beforeSend: function () {
                $b.text('Отправка...');
            },
            success: function (response) {
                var r = parseInt(response);

                $b.text(bVal);
                $s.html(status[r]).slideDown(500);

                if (r == 1) {
                    $f.attr('data-form-success', '');
                    $f.find('input, textarea, select').val('');

                    //yaCounter41432709.reachGoal(reachGoalTarget);

                }
            },
            error: function (jqXHR, textStatus, ex) {
                alert(textStatus + "," + ex + "," + jqXHR.responseText);
            }
        });
        return false;
    });
});