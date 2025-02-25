AOS.init();

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});

document.getElementById("promoButton").onclick = function() {
    var promoCarousel = document.getElementById("promoCarousel");
    if (promoCarousel.style.display === "none" || promoCarousel.style.display === "") {
        promoCarousel.style.display = "block";
    } else {
        promoCarousel.style.display = "none";
    }
};

window.onscroll = function() {
    var backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

document.getElementById("menuToggle").onclick = function() {
    var navMenu = document.querySelector(".nav ul");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
};

var videoSwiper = new swiper('#videoCarousel', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});