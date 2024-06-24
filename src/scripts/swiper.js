import { register } from "swiper/element/bundle";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

register();

export default function carousel() {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    effect: "coverflow",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
}
