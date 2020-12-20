$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#target');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 70}, 1500);
});