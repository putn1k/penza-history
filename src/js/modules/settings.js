import SmoothScroll from 'smooth-scroll';
import AcceptCookiePopup from 'accept-cookie-popup';

import {
  smoothScrollConfig
} from './configs.js';

import {
  iosVhFix
} from './utils.js';

import {
  initScrollObserver,
} from './scroll-observer.js';

import {
  initSearchPopup,
} from './search-popup.js';

import {
  initSearchLocations
} from './search-location.js';

import {
  initShowerLocations,
} from './location-list.js';

import './modal.js';

const initSiteSettings = () => {
  iosVhFix();
  initScrollObserver();
  new SmoothScroll( 'a[href*="#"]', smoothScrollConfig );
  new AcceptCookiePopup();
  initSearchPopup();
  initShowerLocations();
  initSearchLocations();
};

export {
  initSiteSettings,
};