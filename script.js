
// show/hide menu on click of hamburger menu icon
function showMenu(){
    $('nav').on('click', '#menu', function() {
        $('#navMenu').toggle();
    })
}

// hide menu after clicking anchor tag (only on displays 1024px or less)
function navLinkClick() {
    $('nav').on('click', 'a', function() {
        const menu = $(this).closest('div');
        const windowSize = $(window).width();
        if (windowSize <= 1024) {
            menu.toggle();
        }
    })
}

function onLoad() {
    showMenu();
    navLinkClick();
}

$(onLoad);