var csrftoken = Cookies.get('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body, header').animate({
            scrollTop: $(target).offset().top - ($(window).width() > 768 ? 60 : 60)
        }, 1000);
    });
}

$(function () {
    new WOW().init();

    $().timelinr({
        orientation: 'vertical',
        issuesSpeed: 300,
        datesSpeed: 100,
        arrowKeys: 'true',
        startAt: 3
    });

    var $window = $(window);
    var header = $('#header:not(.header2)');

    var scroll = $window.scrollTop();
    if (scroll < 100) {
        header.removeClass("sticky");
    } else {
        header.addClass("sticky");
    }

    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on('click', function (event) {
            event.preventDefault();
            var target = $(this).attr('href');
            $('html, body, header').animate({
                scrollTop: $(target).offset().top - ($(window).width() > 768 ? 80 : 100)
            }, 1000);
        });
    }

    $('#modalHelp').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var help = button.attr('data-help');
        console.log(button)
        console.log(help)

        $('#text-help').html(help);
    })

    if ($("#rev_slider_1069_1").length) {
        var revapi19 = $("#rev_slider_1069_1").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
            fullScreenAutoWidth: "on",
            fullScreenOffsetContainer: "#pseudo-header",
            delay: 31000,
            disableProgressBar: "on",
            spinner: 'off',
            responsiveLevels: [2000, 1360, 992, 500],
            gridwidth: [1700, 1250, 900, 400],
            gridheight: [700, 550, 550, 450],
            lazyType: "smart"
        });
        revapi19.bind("revolution.slide.onloaded", function (e) {

        });

    }

    var padding_left = $('#logo').width() + 160;
    // $('.mega-menu').css('padding-left', padding_left);

    // $(window).resize(function () {
    //     var padding_left = $('#logo').width() + 160;
    //     $('.mega-menu').css('padding-left', padding_left);
    // });

    $('#menu').hover(function () {
        $('.mega-menu').addClass('mega-menu-visible');
    }, function () {
        $('.mega-menu').removeClass('mega-menu-visible');
    });

    $('.mega-menu').hover(function () {
        $('.mega-menu').addClass('mega-menu-visible');
    }, function () {
        $('.mega-menu').removeClass('mega-menu-visible');
    });

    var sub;
    $('.sub-active').hover(function () {
        sub = $(this).attr('data-target');
        $(sub + ' .list-group-item').addClass('a-sub');
    }, function () {
        $(sub + ' .list-group-item').removeClass('a-sub');
    });


    $('.mega-menu .list-group').hover(function () {
        menu = $(this).attr('data-target');
        $('#main-nav .sub-active[data-target="' + menu + '"]').parent().addClass('hover');
    }, function () {
        $('#main-nav .sub-active[data-target="' + menu + '"]').parent().removeClass('hover');
    });


    $(".preloader").fadeOut();

    $window.on('scroll', function () {
        var scroll = $window.scrollTop();
        if (scroll < 100) {
            header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }
    });

    var waypoints_length = $('script[src*="jquery.waypoints.min.js"]').length;

    if (waypoints_length) {
        var waypoint = new Waypoint({
            element: document.getElementsByClassName('number'),
            handler: function (direction) {
                $('.number').trigger('on-appear');
            },
            offset: '75%',
        });
    }

    function isScrolledIntoView(el) {
        if (el != null) {
            var elemTop = el.getBoundingClientRect().top;
            var elemBottom = el.getBoundingClientRect().bottom;

            var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            return isVisible;
        }
    }

    $(window).scroll(function () {
        if (isScrolledIntoView(document.getElementById('wprt-counter-index'))) {
            $('#wprt-counter-index').find('.number').each(function () {
                var to = parseFloat($(this).data('to')),
                    speed = parseInt($(this).data('speed')),
                    decimals = parseInt($(this).data('decimals'));

                $(this).countTo({
                    to: to,
                    speen: speed,
                    decimals: decimals,
                    formatter: function (value, options) {
                        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                        ;
                    },
                    onComplete: function (value) {
                        if (value === 1.9)
                            return this.innerHTML += '%';
                    }

                });
            });

            // Unbind scroll event
            $(window).off('scroll');
        }
    });


    // var owl_index1 = $('#owl-carousel-index1.owl-carousel');
    // owl_index1.owlCarousel({
    //     margin: 5,
    //     nav: false,
    //     items: 1,
    //     dots: false,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 12000,
    //     smartSpeed: 3500,
    //     autoplayHoverPause: true,
    // });

    // var owl_index2 = $('#owl-carousel-index2.owl-carousel');
    // owl_index2.owlCarousel({
    //     margin: 5,
    //     nav: false,
    //     items: 1,
    //     dots: false,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 12000,
    //     smartSpeed: 3500,
    //     autoplayHoverPause: true,
    // });

    if ($window.width() <= 1260) {
        $('#all-menu').removeClass('d-flex');
        $('#all-menu').css('display', 'none');
        $('#open-menu').removeClass('d-none');
        $('#open-menu').addClass('d-flex');

    } else {
        $('#all-menu').addClass('d-flex');
        $('#all-menu').css('display', 'flex');
        $('#open-menu').removeClass('d-flex');
        $('#open-menu').addClass('d-none');
    }

    $window.resize(function () {
        if ($window.width() <= 1260) {
            $('#all-menu').removeClass('d-flex');
            $('#all-menu').css('display', 'none');
            $('#open-menu').removeClass('d-none');
            $('#open-menu').addClass('d-flex');
            $('.mega-menu').removeClass('mega-menu-visible');
        } else {
            $('#all-menu').addClass('d-flex');
            $('#all-menu').css('display', 'flex');
            $('#open-menu').removeClass('d-flex');
            $('#open-menu').addClass('d-none');
        }
    });

    $('#open-menu').click(function () {
        $('#menu-sidebar').css('right', '0');
        $('#menu-overlay').css('display', 'block');
    });

    $('#close-menu').click(function () {
        $('#menu-sidebar').css('right', '-320px');
        $('#menu-overlay').css('display', 'none');
    });

    $('#menu-overlay').click(function () {
        $('#menu-sidebar').css('right', '-320px');
        $('#menu-overlay').css('display', 'none');
    });


    $('#top').click(function () {
        var body = $("html, body");
        body.stop().animate({scrollTop: 0}, 1000, 'swing');
    });
    if ($("#slider1").length) {
        var header_slider = $("#slider1").show().revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            fullScreenAutoWidth: "on",
            fullScreenOffsetContainer: "#pseudo-header",
            delay: 7000,
            disableProgressBar: "on",
            spinner: 'off',
            responsiveLevels: [2000, 1360, 992, 500],
            gridwidth: [1700, 1250, 900, 400],
            gridheight: [700, 550, 550, 450],
            lazyType: "smart"
        });
    }
    if ($("#rev_slider_index_1").length) {
        var rev_slider_index_1 = $("#rev_slider_index_1").show().revolution({
            sliderType: "carousel",
            jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
            dottedOverlay: "none",
            delay: 10000,
            disableProgressBar: 'on',
            carousel: {
                horizontal_align: "center",
                vertical_align: "center",
                fadeout: "off",
                infinity: "on",
                space: 5,
                stretch: "off"
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [1200, 700, 500, 500],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
            },
            shadow: 5,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "on",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }

    if ($("#rev_slider_index_2").length) {
        var rev_slider_index_2 = $("#rev_slider_index_2").show().revolution({
            sliderType: "carousel",
            jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
            dottedOverlay: "none",
            delay: 10000,
            disableProgressBar: 'on',
            carousel: {
                horizontal_align: "center",
                vertical_align: "center",
                fadeout: "off",
                infinity: "on",
                space: 5,
                stretch: "off"
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [1500, 700, 500, 500],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
            },
            shadow: 5,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "on",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }

    $('#modalSearch').on('show.bs.modal', function (e) {
        $('#menu-sidebar').css('right', '-320px');
        $('#menu-overlay').css('display', 'none');
    });

    if ($('.dataTableC').length) {
        //Cantidad de paginas en el paginado - datatable
        $.fn.DataTable.ext.pager.numbers_length = 5;

        if (locale === 'es') {
            $('.dataTableC').DataTable({
                "language": {
                    "lengthMenu": "Mostrar en bloques de  _MENU_  registros",
                    "zeroRecords": "No se he encontrado",
                    "info": "Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
                    "infoEmpty": "No hay registros disponibles",
                    "infoFiltered": "(filtrado de _MAX_ registros en total)",
                    "sSearch": "Buscar:",
                    "oPaginate": {
                        "sFirst": "Primero",
                        "sPrevious": "Anterior",
                        "sNext": "Siguiente",
                        "sLast": "Último"
                    }
                },
                "pagingType": $(window).width() < 768 ? "full" : "full_numbers",
                "bSort": true,
                "order": [[1, 'desc']]
            });
        } else {
            $('.dataTableC').DataTable({
                "pagingType": $(window).width() < 768 ? "full" : "full_numbers",
                "bSort": true,
                "order": [[1, 'desc']]
            });
        }
    }

    var text_success = (locale === 'es') ? 'Su mensaje nos ha sido enviado.' : 'Your message has been sent to us.';
    var text_danger = (locale === 'es') ? 'Hubo un error al enviar su mensaje.' : 'There was an error sending your message.';

    var text_success_suscrb = (locale === 'es') ? 'Correo enviado satisfactoriamente.' : 'Mail sent successfully.';
    var text_danger_suscrb = (locale === 'es') ? 'Hubo un error al enviar su correo.' : 'There was an error sending your email.';

    function alert_animations(container, type, text) {
        var htmlAlert = '<div class="alert alert-' + type + ' mt-2">' + text + '</div>';
        $(container).prepend(htmlAlert);
        $(container + " .alert").first().hide().fadeIn(800).delay(2000).fadeOut(800, function () {
            $(this).remove();
        });
    }

    function button_loading(button, icon, finish) {
        if (!finish) {
            $(button).prepend(icon);
            $(button).addClass('loading');
        } else {
            $(button + ' i').remove();
            $(button).removeClass('loading');
        }
    }

    if ($('#newsletter-form').length) {
        var newsletter_form = $('#newsletter-form');
        newsletter_form.validate({
            highlight: function (element) {
                $(element)
                    .addClass('is-invalid')
                    .removeClass('is-valid')
                    .parent()
                    .removeClass('has-success')
                    .addClass('has-danger');
            },
            success: function (label, element) {
                $(element)
                    .removeClass('is-invalid')
                    .addClass('is-valid')
                    .parent()
                    .removeClass('has-danger')
                    .addClass('has-success')
                    .find('label.error')
                    .remove();
            },
            errorPlacement: function (error, element) {
                if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
                    error.appendTo(element.parent().parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });

        newsletter_form.submit(function (e) {
            e.preventDefault();
            if (newsletter_form.valid()) {
                button_loading('#newsletter-submit', '<i class="fa fa-spinner fa-spin mr-2"></i>');
                $.ajax({
                    type: 'POST',
                    url: '/newsletter-form',
                    data: newsletter_form.serialize(),
                    success: function (response) {
                        // console.log(response);
                        if (response.status === 'success') {
                            $('input').val('');
                            $('input').removeClass('is-valid valid');
                            $('#newsletterCheckbox').click();
                            $('select').val('Analista');
                            setTimeout(function () {
                                $('#newsletter-submit').addClass('loading');
                            }, 50);
                            $('#newsletter-success').modal('show');
                        } else {
                            alert_animations('.alert-message', 'danger', text_danger_suscrb);
                        }
                        button_loading('#newsletter-submit', '<i class="fa fa-spinner fa-spin mr-2"></i>', true);
                    }
                });
            }
        });
    }

    if ($('#newsletter-form-footer').length) {
        var newsletter_form_footer = $('#newsletter-form-footer');
        newsletter_form_footer.validate({
            highlight: function (element) {
                $(element)
                    .addClass('is-invalid')
                    .removeClass('is-valid')
                    .parent()
                    .removeClass('has-success')
                    .addClass('has-danger');
            },
            success: function (label, element) {
                $(element)
                    .removeClass('is-invalid')
                    .addClass('is-valid')
                    .parent()
                    .removeClass('has-danger')
                    .addClass('has-success')
                    .find('label.error')
                    .remove();
            },
            errorPlacement: function (error, element) {
                if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
                    error.appendTo(element.parent().parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });

        newsletter_form_footer.submit(function (e) {
            e.preventDefault();
            if (newsletter_form_footer.valid()) {
                button_loading('#newsletter-submit-footer', '<i class="fa fa-spinner fa-spin mr-2"></i>');
                $.ajax({
                    type: 'POST',
                    url: '/newsletter-form',
                    data: newsletter_form_footer.serialize(),
                    success: function (response) {
                        // console.log(response);
                        if (response.status === 'success') {
                            $('input').val('');
                            $('input').removeClass('is-valid valid');
                            // $('#newsletterCheckbox').click();
                            // $('select').val('Analista');
                            setTimeout(function () {
                                $('#newsletter-submit-footer').addClass('loading');
                            }, 50);
                            $('#newsletter-success').modal('show');
                        } else {
                            alert_animations('.alert-message-footer', 'danger', text_danger_suscrb);
                        }
                        button_loading('#newsletter-submit-footer', '<i class="fa fa-spinner fa-spin mr-2"></i>', true);
                    }
                });
            }
        });
    }

    if ($('#newsletter-form-inv').length) {
        var newsletter_form_inv = $('#newsletter-form-inv');
        newsletter_form_inv.validate({
            highlight: function (element) {
                $(element)
                    .addClass('is-invalid')
                    .removeClass('is-valid')
                    .parent()
                    .removeClass('has-success')
                    .addClass('has-danger');
            },
            success: function (label, element) {
                $(element)
                    .removeClass('is-invalid')
                    .addClass('is-valid')
                    .parent()
                    .removeClass('has-danger')
                    .addClass('has-success')
                    .find('label.error')
                    .remove();
            },
            errorPlacement: function (error, element) {
                if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
                    error.appendTo(element.parent().parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });

        newsletter_form_inv.submit(function (e) {
            e.preventDefault();
            if (newsletter_form_inv.valid()) {
                button_loading('#newsletter-submit', '<i class="fa fa-spinner fa-spin mr-2"></i>');
                $.ajax({
                    type: 'POST',
                    url: '/newsletter-form',
                    data: newsletter_form_inv.serialize(),
                    success: function (response) {
                        console.log(response);
                        if (response.status === 'success') {
                            $('input').val('');
                            $('input').removeClass('is-valid valid');
                            $('#newsletterCheckbox').click();
                            $('select').val('Analista');
                            setTimeout(function () {
                                $('#newsletter-submit').addClass('loading');
                            }, 50);
                            $('#newsletter-success').modal('show');
                        } else {
                            alert_animations('.alert-message', 'danger', text_danger_suscrb);
                        }
                        button_loading('#newsletter-submit', '<i class="fa fa-spinner fa-spin mr-2"></i>', true);
                    }
                });
            }
        });
    }


    if ($('.contact-form').length) {
        var contact_form = $('.contact-form');
        contact_form.validate({
            highlight: function (element) {
                $(element)
                    .addClass('is-invalid')
                    .removeClass('is-valid')
                    .parent()
                    .removeClass('has-success')
                    .addClass('has-danger');
            },
            success: function (label, element) {
                $(element)
                    .removeClass('is-invalid')
                    .addClass('is-valid')
                    .parent()
                    .removeClass('has-danger')
                    .addClass('has-success')
                    .find('label.error')
                    .remove();
            },
            errorPlacement: function (error, element) {
                if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
                    error.appendTo(element.parent().parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });
        grecaptcha.ready(function () {
            contact_form.submit(function (e) {
                e.preventDefault();
                if (contact_form.valid()) {
                    button_loading('#contact-submit', '<i class="fa fa-spinner fa-spin mr-2"></i>');
                    grecaptcha.execute(site_key, {action: 'contactform'})
                        .then(function (token) {
                            document.getElementById('contact_recaptcha_response').value = token;
                            $.ajax({
                                type: 'POST',
                                url: '/contact-form',
                                data: contact_form.serialize(),
                                success: function (response) {
                                    if (response.status === 'success') {
                                        $('input').val('');
                                        $('input').removeClass('is-valid valid');
                                        $('textarea').val('');
                                        $('textarea').removeClass('is-valid valid');
                                        setTimeout(function () {
                                            $('#contact-submit').addClass('loading');
                                        }, 50);
                                        alert_animations('.alert-message', 'success', text_success);
                                    } else {
                                        alert_animations('.alert-message', 'danger', text_danger);
                                    }
                                    button_loading('#contact-submit', '<i class="fa fa-spinner fa-spin mr-2"></i>', true);
                                }
                            });
                        });
                }
            });
        });
    }

});