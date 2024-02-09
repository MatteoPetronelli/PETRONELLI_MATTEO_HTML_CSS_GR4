document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    slideEffect: {
      slideShadows: true,
      shadow: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    autoplayDisableOnInteraction: true,
  });
});

document.querySelector(".dark-mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
