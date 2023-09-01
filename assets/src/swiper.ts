import { Swiper } from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

const options: SwiperOptions = {
  modules: [Pagination, Autoplay, EffectFade],
  
  loop: true,
  speed: 1000,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    /* スライド自動切り替え永続 */
    disableOnInteraction: false,
    /* スライド自動切り替え方向 */
    reverseDirection: false,
    /* マウスホバーでスライド自動切り替え停止 */
    pauseOnMouseEnter: false,
  },

  preventClicks: false,
  preventClicksPropagation: false,
  grabCursor: false,
  allowTouchMove: false,

  pagination: {
    el: '.swiper-pagination',
  },
}

export const heroSwiper = () => {
  new Swiper('.hero-swiper', options);
}