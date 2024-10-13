

const TOP_TOURS = [
   {
       "hours": "4.5+ hours",
       "info": "3014 reviews",
       "image": "1.jpg",
       "title": "Marina Bay Sands",
       "location": "Singapore, Singapore",
       "fare": "IN₹7687",
       "reviews": "3014",
       "best_seller": true,
       "top_rated": false
   },
   {
       "hours": "4.5+ hours",
       "info": "2045 reviews",
       "image": "petronas.jpg",
       "title": "Petronas Towers",
       "location": "Kuala Lumpur, Malaysia",
       "fare": "IN₹9748",
       "reviews": "2045",
       "best_seller": false,
       "top_rated": false
   },
   {
       "hours": "3.5+ hours",
       "info": "4163 reviews",
       "image": "dubai_mall.jpg",
       "title": "Dubai Mall",
       "location": "Dubai, United Arab Emirates",
       "fare": "IN₹11526",
       "reviews": "4163",
       "best_seller": false,
       "top_rated": true
   },
   {
       "hours": "4+ hours",
       "info": "1458 reviews",
       "image": "grand_palace.jpg",
       "title": "Grand Palace",
       "location": "Bangkok, Thailand",
       "fare": "IN₹9299",
       "reviews": "1458",
       "best_seller": false,
       "top_rated": false
   },
   {
       "hours": "5+ hours",
       "info": "3014 reviews",
       "image": "masjid_al_haram.jpg",
       "title": "Masjid al-Haram",
       "location": "Makkah, Saudi Arabia",
       "fare": "IN₹21119",
       "reviews": "3014",
       "best_seller": true,
       "top_rated": false
   },
   {
       "hours": "5+ hours",
       "info": "2045 reviews",
       "image": "mount_arafat.jpg",
       "title": "Mount Arafat",
       "location": "Near Makkah, Saudi Arabia",
       "fare": "IN₹7687",
       "reviews": "2045",
       "best_seller": false,
       "top_rated": false
   }
]





function render_top_tours(){
   const parent = document.getElementById("top-tours-parent")

   TOP_TOURS.forEach(item => {

      const child_to_append = `<div class="swiper-slide swiper-slide-active" style="width: 301.5px; margin-right: 30px">
                     <div data-aos="fade" data-aos-delay="100" class="aos-init aos-animate">
                        <a class="tourCard -type-1 rounded-4"><div class="tourCard__image">
                           <div class="cardImage ratio ratio-1:1">
                              <div class="cardImage__content">
                                 <div class="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
                                 <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events mySwiper swiper-backface-hidden">
                                    <div class="swiper-wrapper" style="
                                       transform: translate3d(0px, 0px, 0px);
                                       ">
                                       <div class="swiper-slide swiper-slide-active" style="width: 302px">
                                       <img class="rounded-4 col-12 js-lazy" src="./assets/${item.image}" alt="image">
                                       </div>
                                    </div>
                                    
                                 </div>
                                 </div>
                              </div>
                           </div>

                           <div class="cardImage__leftBadge">
                              ${
                                 item.best_seller ? `<div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-1 text-white">
                                 best seller
                              </div>` : item.top_rated ? `<div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-yellow-1 text-dark-1">
                                 top rated
                              </div>` : ''
                              }
                           </div>
                           </div>
                           <div class="tourCard__content mt-10">
                           <div class="d-flex items-center lh-14 mb-5">
                              <div class="text-14 text-light-1">${item.hours}</div>
                              <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                           <div class="text-14 text-light-1">
                              ${item.info}
                           </div>
                           </div>
                           <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                              <span>${item.title}</span>
                           </h4>
                           <p class="text-light-1 lh-14 text-14 mt-5">
                           ${item.location}
                           </p>
                           <div class="row justify-between items-center pt-15">
                              <div class="col-auto">
                                 <div class="d-flex items-center">
                                 <div class="d-flex items-center x-gap-5">
                                    <div class="icon-star text-yellow-1 text-10"></div>
                                    <div class="icon-star text-yellow-1 text-10"></div>
                                    <div class="icon-star text-yellow-1 text-10"></div>
                                    <div class="icon-star text-yellow-1 text-10"></div>
                                    <div class="icon-star text-yellow-1 text-10"></div>
                                 </div>
                                 <div class="text-14 text-light-1 ml-10">
                                 ${item.reviews} reviews
                                 </div>
                                 </div>
                              </div>
                              <div class="col-auto">
                                 <div class="text-14 text-light-1">
                                 From<span class="text-16 fw-500 text-dark-1">
                                    ${item.fare}</span>
                                 </div>
                              </div>
                           </div>
                           </div></a>
                     </div>
                     </div>`
      parent.insertAdjacentHTML('beforeend', child_to_append);
                  })
}





document.addEventListener("DOMContentLoaded", () => {
   render_top_tours();
});


