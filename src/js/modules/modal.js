import {
  isEscKey,
  lockScroll,
  unlockScroll
} from './utils.js';

const btns = document.querySelectorAll( '[data-modal-btn]' );
const OPEN_CLASS_NAME = 'is-open';

const onOverlayClick = ( evt ) => {
  const btn = document.querySelector( '.is-open[data-modal-btn]' );
  const modal = document.querySelector( `#${btn.dataset.modalBtn}` );

  if ( evt.target && evt.target.classList.contains( 'site-modal' ) ) {
    btn.classList.remove( OPEN_CLASS_NAME );
    modal.classList.remove( OPEN_CLASS_NAME );
    unlockScroll();
    document.removeEventListener( 'click', onOverlayClick );
    document.removeEventListener( 'keydown', onEscKeydown );
  }
};

const onEscKeydown = ( evt ) => {
  const btn = document.querySelector( '.is-open[data-modal-btn]' );
  const modal = document.querySelector( `#${btn.dataset.modalBtn}` );
  if ( isEscKey( evt ) ) {
    btn.classList.remove( OPEN_CLASS_NAME );
    modal.classList.remove( OPEN_CLASS_NAME );
    unlockScroll();
    document.removeEventListener( 'click', onOverlayClick );
    document.removeEventListener( 'keydown', onEscKeydown );
  }
};

const onModalBtnClick = ( evt ) => {
  evt.preventDefault();
  const modal = document.querySelector( `#${evt.currentTarget.dataset.modalBtn}` );

  if ( !modal ) {
    console.warn( 'Not found modal' );
    return;
  }

  evt.currentTarget.classList.toggle( OPEN_CLASS_NAME );
  if ( evt.currentTarget.classList.contains( OPEN_CLASS_NAME ) ) {
    lockScroll();
    modal.classList.add( OPEN_CLASS_NAME );
    document.addEventListener( 'click', onOverlayClick );
    document.addEventListener( 'keydown', onEscKeydown );
  } else {
    modal.classList.remove( OPEN_CLASS_NAME );
    unlockScroll();
    document.removeEventListener( 'click', onOverlayClick );
    document.removeEventListener( 'keydown', onEscKeydown );
  }
};

const setupModal = ( btn ) => {
  btn.addEventListener( 'click', onModalBtnClick );
};

btns.forEach( setupModal );