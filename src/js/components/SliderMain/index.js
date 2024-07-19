import Swiper from 'swiper';
import {Navigation, Keyboard} from 'swiper/modules';

export function SliderMain() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation,Keyboard],
    slidesPerView: 1,
    speed: 1000,
    rewind: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });

}