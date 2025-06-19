import './modules/libsCss.js';
import 'focus-visible';

import {
  initSiteSettings
} from './modules/settings.js';


document.addEventListener( 'DOMContentLoaded', () => {
  initSiteSettings();

  window.addEventListener( 'load', () => {
  } );
} );