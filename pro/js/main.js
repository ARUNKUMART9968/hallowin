//menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};
//close menu on scroll
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};
// selling swip
var swiper = new Swiper(".selling-content", {
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween:10,
        },
        510:{
            slidesPerView:2,
            spaceBetween:10,
        },
        750:{
            slidesPerView:3,
            spaceBetween:15,
        },
        900:{
            slidesPerView:4,
            spaceBetween:20,
        },
    }
  });

//   nav background chane
let header=document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active',window.scrollY > 0);
})

//scroll animation
const animate=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay:'400'

});
animate.reveal(".nav,.heading,.subscribe p,.email-box")
animate.reveal(".home-layer1,.home-layer2,.subscribe img",{origin: "left"});
animate.reveal(".home-layer1,.home-layer2",{origin: "left"});
animate.reveal(".home-content",{origin: "bottom"});
animate.reveal(".deal-box,.offer-box,.sale-box,.ticket-box,.footer-box",{interval: 100,});
