// import modules

import { initModals, initSliders } from '../components';
import { initAnchorsScroll } from './modules';
import { initPage } from './modules';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initModals();
  initAnchorsScroll();
  initSliders();
});
