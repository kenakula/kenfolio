// import modules

import { initLangSelect, initModals, initSliders } from '../components';
import { initAnchorsScroll } from './modules';
import { initPage } from './modules';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initLangSelect();
  initModals();
  initAnchorsScroll();
  initSliders();
});
