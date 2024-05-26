function processMpFilter(form) {
    var a = form.parents("form");
    var btn = a.find("input[type='submit']");
    var fd = a.serialize();
    $.ajax({
        url: "ajax.php",
        data: fd,
        type: "POST",
        cache: false,
        dataType: 'json',
        beforeSend: function () {
            a.css({'opacity' : '0.5'});
            btn.prop("disabled", "disabled");
        },
        success: function (msg) {
            a.animate({'opacity' : '1'}, 250);
            btn.prop("disabled", "");
            if (msg.status == 'ok') {
                btn.val(btn.data("text") + msg.cnt);
            } else {
                alert('Что-то пошло не так, попробуйте позднее');
            }
        }
    })
}
function jivome() {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//code-eu1.jivosite.com/widget/6ybQLnw7py';
    script.async = true;
    document.body.appendChild(script);
}



$(document).ready(function(){

    $(document).on('click', function(e) {
        let $headerPhonesTrigger = $('.top_phone_icon'),
            $headerPhonesModal = $('.top_phones_wrapper'),
            $tableFiltersTrigger = $('.icon.tablesorter-noSort'),
            $tableFiltersModal = $('.filter-wrap.tablesorter-noSort'),
            $tableFiltersBtn = $('.show_full a')

        if (
            !$headerPhonesTrigger.is(e.target)
            && !$headerPhonesModal.is(e.target)
            && $headerPhonesModal.has(e.target).length === 0
        )
        {
            $headerPhonesModal.hide();
        }
        if (
            !$tableFiltersTrigger.is(e.target)
            && !$tableFiltersModal.is(e.target)
            && !$tableFiltersBtn.is(e.target)
            && $tableFiltersModal.has(e.target).length === 0
        )
        {
            $tableFiltersModal.parents('td').removeClass('active');
        }
    });


    $('.js-pic-modal').fancybox({
        // Options will go here
    });

    $(document).on("change", "#mpSearchForm select", function(){
        processMpFilter($(this));
    })
    $(document).on("blur", "#mpSearchForm input[type='text']", function(){
        processMpFilter($(this));
    })
    $(document).on("submit", "form.popupform", function(e){
        e.preventDefault();
        var a = $(this);
        var fd = new FormData(a[0]);
        $.ajax({
            url: "ajax.php",
            data: fd,
            type: "POST",
            cache: false,
            processData: false,
            contentType: false,
            dataType: 'json',
            beforeSend: function () {
                a.css({'opacity':'.5'});
            },
            success: function (msg) {
                a.animate({'opacity':'1'}, 250);
                var errors = msg.errors || {};
                if(Object.keys(errors).length > 0) {
                    for (k in errors) {
                        let f = errors[k];
                        for (j in f) {
                            a.find("." + k + "_error").html(f[j]);
                        }
                    }
                } else {
                    var target = a.data("target");
                    if(typeof target != "undefined") {
                        $.magnificPopup.close();
                        $("#" + target + "_btn").trigger("click");
                        a.find("input[type='text'], input[type='tel'], input[type='email'], textarea").each(function(){
                            $(this).val('');
                        })
                    }
                }
            }
        })
    })

    $(document).on("keyup keydown change", "input, select, textarea", function(){
        if($(this).next(".form_error").length > 0) {
            $(this).next(".form_error").html('');
        }
    })

    $(document).on("change", "input[type='file']", function(){
        if($(this).next(".filename_info").length == 1) {
            $(this).next(".filename_info").text($(this).val());
        }
    })

    $(document).on("submit", "form.userform", function(e){
        e.preventDefault();
        var a = $(this);
        var fd = new FormData(a[0]);
        $.ajax({
            url: "ajax.php",
            data: fd,
            type: "POST",
            cache: false,
            processData: false,
            contentType: false,
            dataType: 'json',
            beforeSend: function () {
                a.css({'opacity':'.5'});
                a.find('.form_error').html('');
            },
            success: function (msg) {
                a.animate({'opacity':'1'}, 250);
                console.log(msg);
                var errors = msg.errors || {};
                var loginErrors = msg.loginErrors || {};
                var url = msg.url || '';
                if(Object.keys(errors).length > 0) {
                    for (k in errors) {
                        let f = errors[k];
                        for (j in f) {
                            a.find("." + j + "_error").html(f[j]);
                        }
                    }
                } else if(Object.keys(loginErrors).length > 0) {
                    let txt = '';
                    for (k in loginErrors) {
                        console.log(k + ' + ' + loginErrors[k]);
                        txt += loginErrors[k] + ' ';
                    }
                    a.find('.common_error').html(txt);
                } else {
                    if(url != '') {
                        location.href = url;
                    } else {
                        location.href = '/';
                    }
                }
            }
        })
    })

    $(document).on("submit", "form#repair_password", function(e){
        e.preventDefault();
        var a = $(this);
        var fd = a.serialize();
        $.ajax({
            url: "ajax.php",
            data: fd,
            type: "POST",
            cache: false,
            dataType: 'json',
            beforeSend: function () {
                a.css({'opacity':'.5'});
                a.find('.form_error').html('');
            },
            success: function (msg) {
                a.animate({'opacity':'1'}, 250);
                //console.log(msg);
                if(msg.status == 'error') {
                    a.find('.form_error').html(msg.message);
                } else {
                    alert(msg.send);
                }
            }
        })
    })

    $(document).on("submit", "form#new_password", function(e){
        e.preventDefault();
        var a = $(this);
        var fd = a.serialize();
        $.ajax({
            url: "ajax.php",
            data: fd,
            type: "POST",
            cache: false,
            dataType: 'json',
            beforeSend: function () {
                a.css({'opacity':'.5'});
                a.find('.form_error').html('');
            },
            success: function (msg) {
                a.animate({'opacity':'1'}, 250);
                if(msg.status == 'error') {
                    a.find('.form_error').html(msg.message);
                } else {
                    location.href = msg.message;
                }
            }
        })
    })


    $('.js-tab-content').find('table').each((i, table) => {
        $(table).wrap('<div class="table-wrapper" />')
    })


    $(document).on("click", ".mob_catalog_menu_link", function(e){
        e.preventDefault();
        $(this).next('.icon').trigger("click");
    })

})
