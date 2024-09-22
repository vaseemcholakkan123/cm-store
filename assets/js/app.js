document.addEventListener('DOMContentLoaded', function () {
  AOS.init();

  window.onscroll = function() {
    addStickyClass();
};

function addStickyClass() {
    var header = document.querySelector("header"); // Change "header" to match your header element
    var sticky = header.offsetTop;

    if (window.scrollY > sticky) {
        header.classList.add("-header-5-sticky");
    } else {
        header.classList.remove("-header-5-sticky");
    }
}



  getSwiperOptions = (type, slides=4) => {
    return {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: true,
      pagination: {
        el: `.${type}-swiper-paginator`,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">'  + '</span>';
        }
      },
      navigation: {
        nextEl: `.${type}-next`,
        prevEl: `.${type}-prev`,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: slides-1,
          spaceBetween: 40,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: slides,
          spaceBetween: 50,
          slidesPerGroup: 3,
        },
      }
    };
  };

  let tourSwiper = new Swiper(".tour-swiper", getSwiperOptions("tours"));
  let featuresSwiper = new Swiper(".features-swiper", getSwiperOptions("features", 5));
    
});