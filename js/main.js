let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
 }

//  Notification
let bell = document.querySelector('.notification'); 

document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active');
}

// Swiper
var swiper = new Swiper(".mySwiper", {
    sliderPerView:1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            sliesPerView: 2,
            spaceBetween: 10,
        },
        768
    }
})