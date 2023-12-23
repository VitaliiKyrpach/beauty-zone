const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,

  pagination: {
    el: ".dots-list",
    bulletClass: "dots",
    bulletActiveClass: "dots-active",
  },

  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});
