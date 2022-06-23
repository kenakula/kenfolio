import Swiper from 'swiper';

const sliders = document.querySelectorAll('[data-swiper]');

export const initSliders = () => {
  if (!sliders.length) {
    return;
  }

  sliders.forEach(slider => {
    const swiperInst = new Swiper(slider, {
      slidesPerView: 1.3,
      spaceBetween: 20,
    });
  });
};
