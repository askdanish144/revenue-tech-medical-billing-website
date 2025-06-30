// Remove the &#8203; from the HTML
document.body.innerHTML = document.body.innerHTML.replace(/\u200B/g, '');

// Header Scroll 
let nav = document.querySelector(".navbar");
let navHeight = nav.offsetHeight; // Get the height of navbar
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("header-scrolled");
        document.body.style.paddingTop = navHeight + "px";
    } else {
        nav.classList.remove("header-scrolled");
        document.body.style.paddingTop = "0";
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach((a) => {
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show");
    })
})

// Nav Animation on big screen  
const applyClassOnBigScreen = () => {
    let element = document.querySelector("#navbarNav>ul");
    if (window.innerWidth > 991) {
        element.classList.add("nav-animation"); // Add the class
    } else {
        element.classList.remove("nav-animation"); // Remove the class if screen size is smaller
    }
}

applyClassOnBigScreen();
window.addEventListener('resize', applyClassOnBigScreen);

// OnLoad fade
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

// Setting Carousal Image changing time
var myCarousel = new bootstrap.Carousel(document.querySelector('#myCarousel'), {
    interval: 3000,
    ride: "carousel"
});
