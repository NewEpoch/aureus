  //header
  var swiper = new Swiper(".shopCard", {
    slidesPerView: 1,
    pagination: {
      clickable: 'true',
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next-shop",
      prevEl: ".swiper-button-prev-shop",
    },
  });
  var swiper = new Swiper(".storiesCard", {
    slidesPerView: 1,
    spaceBetween: 20,
      pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    breakpoints: {
      557: {
        slidesPerView: 2,

      },
      768: {
        slidesPerView: 3,

      },
    },
  });

  var trendingCard = new Swiper(".trendingCard", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".swiper-button-next-trending",
      prevEl: ".swiper-button-prev-trending",
    },
    breakpoints: {
      375: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  var categoriesCard = new Swiper(".categoriesCard", {
    slidesPerView: 1,
    spaceBetween: 20,
      pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".swiper-button-next-categories",
      prevEl: ".swiper-button-prev-categories",
    },
    breakpoints: {
      557: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
  var swiper = new Swiper(".lookCard", {
    slidesPerView: 1,
    spaceBetween: 8,
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
        slidesPerView: 1.3,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  var categoriesCard = new Swiper(".bikini-categories", {
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
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
  var headerCard = new Swiper(".headerCard", {
    slidesPerView: 1,
    spaceBetween: 20,
      pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".swiper-button-next-header",
      prevEl: ".swiper-button-prev-header",
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
  var trendingNowCard = new Swiper(".trendingNowCard", {
    slidesPerView: 1,
    spaceBetween: 14,
      pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".swiper-button-next-now",
      prevEl: ".swiper-button-prev-now",
    },
    breakpoints: {
      375: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });

  //light box
  var swiper = new Swiper(".lightbox", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      375: {
        slidesPerView: 1.2,
      },
      530: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  //light box
  var swiper = new Swiper(".lightbox-3", {
    slidesPerView: 1,
      pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    breakpoints: {
      530: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  });
  //lightbox 5
  var swiper = new Swiper(".lightbox-beauty", {
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
        slidesPerView: 1.3,
      },
      530: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.3,
      },
      1024: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
  var swiper = new Swiper(".footerSwiper", {
    slidesPerView: 2,
    spaceBetween: 10,

      pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 20,

      },
    },
  });

  var swiper = new Swiper(".popupCard", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      375: {
        slidesPerView: 1.2,
      },
      557: {
        slidesPerView: 2.4,
      },
      992: {
        slidesPerView: 3.3,
      },
    },
  });
  //banner-swiper-1
  var swiper = new Swiper(".swipers", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".swiper-2", {
    slidesPerView: 1,
    spaceBetween: 20,
      pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".swiper-button-next-btn",
      prevEl: ".swiper-button-prev-btn",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });
  var swiper = new Swiper(".productQualityCard", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".fashion-2", {
    slidesPerView: 1,
      pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".Ceo-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,

      },
    },
  });
  //header
  var trendingCard = new Swiper(".h-trend", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      375: {
        slidesPerView: 1.5,
      },

    },
  });
  var trendingCard3 = new Swiper(".nav-header-2", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var trendingCard2 = new Swiper(".h-search-2", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      375: {
        slidesPerView: 1.5,
      },
      1280: {
        slidesPerView: 4,
      },
      1580: {
        slidesPerView: 5,
      },
    },
  });
