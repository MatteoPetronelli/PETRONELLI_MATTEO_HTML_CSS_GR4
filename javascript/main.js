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

document
  .querySelector(".dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

let filterItems = document.querySelectorAll(".filters li");

filterItems.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document
      .querySelector(".filters .tab-active")
      .classList.remove("tab-active");
    document
      .querySelector(".tab-elements div.active")
      .classList.remove("active");
    this.classList.add("tab-active");
    if (this.classList.contains("Harry")) {
      document.querySelector(".tab-elements div.Harry").classList.add("active");
    }
    if (this.classList.contains("Hermione")) {
      document
        .querySelector(".tab-elements div.Hermione")
        .classList.add("active");
    }
    if (this.classList.contains("Ron")) {
      document.querySelector(".tab-elements div.Ron").classList.add("active");
    }
    if (this.classList.contains("Malefoy")) {
      document
        .querySelector(".tab-elements div.Malefoy")
        .classList.add("active");
    }
  });
});
