$(window).on('resize', function () {
    navbarResizerFunc();
});

var navbarResizerFunc = function navbarResizerFunc() {
    if (sumWidth <= $(window).width()) {
        if (letCollapseWidth && letCollapseWidth <= $(window).width()) {
            $('#navbar').addClass('navbar-collapse');
            $('#navbar').removeClass('navbar-collapsed');
            $('nav').removeClass('naavbar-collapsed-before');
            letCollapseWidth = false;
        }
    } else {
        $('#navbar').removeClass('navbar-collapse');
        $('#navbar').addClass('navbar-collapsed');
        $('nav').addClass('navbar-collapsed-before');
        letCollapseWidth = $(window).width();
    }
};

if ($(window).width() >= 768) {
    navbarResizerFunc();
}

$('[data-toggle="tooltip"]').tooltip();
});