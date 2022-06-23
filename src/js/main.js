// import modules

import { initModals } from '../components/modal/modal';
import { initSliders } from '../components/slider/slider';
import { initAnchorsScroll } from './modules/init-anchors-scroll';
import { initPage } from './modules/init-page';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initModals();
  initAnchorsScroll();
  initSliders();
});
