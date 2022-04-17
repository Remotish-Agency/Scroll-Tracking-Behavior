// When the user scrolls the page, track scroll
window.onscroll = function () { scrollTracker() };

var largestScroll = 0;

function scrollTracker() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    document.getElementById("myBar").style.width = scrolled + "%";

    if (scrolled > largestScroll) {
        largestScroll = scrolled;
        storeCookie();
        console.log("Largest scroll: " + largestScroll);
    }

    if (scrolled == 100) {
        console.log("100% has been reached by the user!");
        console.log(getCookie("scroll"));
    }

}

function storeCookie() {
    console.log("Storing cookie...");
    var now = new Date;
    var days = 500;
    now.setTime(now.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = "scroll=" + largestScroll + ";path=/;expires=" + now.toGMTString();
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "WARNING: The cookies seems to be disabled. Check if you are not running it locally.";
}
