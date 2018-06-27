window.onscroll = function() {
    console.log(window.pageYOffset);
    var nav = document.getElementById('navbar-blur');
    if ( window.pageYOffset > 100 ) {
        nav.classList.add("navbar1");
    } else {
        nav.classList.remove("navbar1");
    }
}