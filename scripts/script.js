var w1 = document.documentElement.clientWidth;
var w2 = window.innerWidth;
var h1 = document.documentElement.clientHeight;
var h2 = window.innerHeight;
var viewportHeight = Math.max(h1, h2);
var viewportWidth = Math.max(w1, w2);
var viewportMin = Math.min(viewportHeight, viewportWidth);

var header = document.querySelector(".page-header");
var hero = document.querySelector(".page-hero");
var headerBottom = document.querySelector(".page-header-bottom");
var navBar = document.querySelector(".nav-bar");
var headerHeight, heroHeight;

const switchWidth = 900;
headerBottom.classList.add(window.innerWidth < switchWidth ? "header-mobile" : "header-full");

window.onload = ()=>{
    headerHeight = header.clientHeight;
    heroHeight = hero.clientHeight;

    hero.style.paddingTop = headerHeight + "px";
    hero.style.height = viewportMin + "px"; // to prevent jumping in ff mobile
}

window.onscroll = ()=> { checkHeader() };

function checkHeader() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled <= headerHeight) {
        header.style.transform = "translateY(-" + scrolled + "px)";
    } else {
        header.removeAttribute("style");
    }
    if (scrolled > headerHeight) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
    if (scrolled > heroHeight) {
        header.classList.add("header-show");
    } else {
        header.classList.remove("header-show");
    }
}

document.querySelector(".nav-menu").onclick = () => {
    if (navBar.clientHeight > 0) {
        navBar.style.height = "0px";
    } else {
        navBar.style.height = navBar.scrollHeight + "px";
    }
};

window.onresize = function(event) {
    if (window.innerWidth < switchWidth) {
        navBar.style.height = null;
        headerBottom.classList.replace("header-full", "header-mobile");
    } else {
        headerBottom.classList.replace("header-mobile", "header-full");
    }
};