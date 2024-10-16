var headerCard = new Swiper(".headerCard", {
  slidesPerView: 1,
  spaceBetween: 20,
      pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});