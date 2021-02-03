// highlight current menu item based on url
// adapted from https://www.infoworld.com/article/3304440/setting-an-active-menu-item-based-on-the-current-url-with-jquery.html
$(function () {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);
    $(".heading .container .main-nav a").each(function () {
        var href = $(this).attr('href');
        if (href.length > 1) {
            if (path.substring(0, href.length) === href) {
                $(this).addClass('active');
            }
        } else if (path.length == 0) {
            $(this).addClass('active');
        }
    });
});

// hover
$(function() {
    $(".heading .container .main-nav a").hover(function() {
        $(this).css("background-color", "gray");
    }, function() {$(this).css("background-color", "")});
});

// responsive menu bar
$(function () {
    $(".heading .container .icon").click(function () {
        $(".heading .container nav").toggle()
    })

    $( window ).resize(function() {
        if ($(".heading .container .icon").is(":visible")) {
            $(".heading .container nav").hide()
        } else {
            $(".heading .container nav").show()
        }
    })

})
