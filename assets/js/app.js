let notRun = true
document.addEventListener("DOMContentLoaded", () => {
  // Check if AOS is defined before initializing


  if (typeof AOS !== "undefined") {
    AOS.init();
  } else {
    console.warn("AOS is not defined.");
  }

  const addStickyClass = () => {
    const header = document.querySelector("header");

    if (header) {
      // Check if header exists
      const sticky = header.offsetTop;

      if (window.scrollY > sticky) {
        header.classList.add("-header-5-sticky");
      } else {
        header.classList.remove("-header-5-sticky");
      }
    } else {
      console.warn("Header element not found.");
    }


    const featuresSwiper = document.querySelector(".features-swiper")
    const featuresSlides = featuresSwiper.querySelectorAll(".swiper-slide")
    const paginator = document.querySelector(".features-swiper-paginator-2")

    
    notRun && featuresSlides.forEach((slide,idx) => {
      notRun = false;
      const span = document.createElement("span"); // Create a new span for each slide
      span.classList.add("swiper-pagination-bullet");
      if(idx == 0) span.classList.add("swiper-pagination-bullet-active")
      paginator.appendChild(span);
    })

  };

  const scrollToTopBtn = document.querySelector(".scroll-to-top");

  // Show or hide the button based on scroll position
  window.onscroll = () => {
    addStickyClass();
    if (scrollToTopBtn) {
      // Check if scrollToTopBtn exists
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    } else {
      console.warn("Scroll to top button not found.");
    }
  };

  // Scroll to top when the button is clicked
  if (scrollToTopBtn) {
    // Check if scrollToTopBtn exists
    scrollToTopBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

  // Check if Swiper is defined before using it
  if (typeof Swiper !== "undefined") {
    const getSwiperOptions = (type, slides = 4) => {
      return {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: `.${type}-swiper-paginator`,
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
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
            slidesPerView: slides - 1,
            spaceBetween: 30,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: slides,
            spaceBetween: 30,
            slidesPerGroup: 3,
          },
        },
      };
    };

    const tourSwiper = new Swiper(".tour-swiper", getSwiperOptions("tours"));
    const featuresSwiper = new Swiper(
      ".features-swiper",
      getSwiperOptions("features", 5)
    );

    featuresSwiper.on('slideChange', function () {
      const bullets = document.querySelectorAll('.features-swiper-paginator-2 span');
      bullets.forEach((bullet, index) => {
        bullet.classList.toggle('swiper-pagination-bullet-active', index === featuresSwiper.activeIndex);
      });
    });

    

  } else {
    console.warn("Swiper is not defined.");
  }
});


