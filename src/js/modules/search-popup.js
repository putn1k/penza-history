import {
  isEscKey
} from './utils.js';

const searchBtn = document.querySelector( '.site-header__search-btn' );
const searchPopup = document.querySelector( '.site-header__search' );
const OPEN_CLASS_NAME = 'is-show';

const onSearchMissclick = ( evt ) => {
  if ( !evt.target.closest( '.site-header__search-btn' ) && !evt.target.closest( '.site-header__search' ) ) {
    searchBtn.classList.remove( OPEN_CLASS_NAME );
    searchPopup.classList.remove( OPEN_CLASS_NAME );
    searchBtn.focus();
    document.removeEventListener( 'click', onSearchMissclick );
    document.removeEventListener( 'keydown', onEscKeydown );
  }
};

const onEscKeydown = ( evt ) => {
  if ( isEscKey( evt ) ) {
    searchBtn.classList.remove( OPEN_CLASS_NAME );
    searchPopup.classList.remove( OPEN_CLASS_NAME );
    searchBtn.focus();
    document.removeEventListener( 'click', onSearchMissclick );
    document.removeEventListener( 'keydown', onEscKeydown );
  }
};

export const initSearchPopup = () => {
  if ( !searchBtn ) return;

  const onSearchBtnClick = ( evt ) => {
    evt.preventDefault();
    if ( !searchPopup ) return;

    searchBtn.classList.toggle( OPEN_CLASS_NAME );
    if ( evt.currentTarget.classList.contains( OPEN_CLASS_NAME ) ) {
      searchPopup.classList.add( OPEN_CLASS_NAME );
      searchPopup.querySelector( '[type="search"]' ).focus();
      document.addEventListener( 'click', onSearchMissclick );
      document.addEventListener( 'keydown', onEscKeydown );
    } else {
      searchPopup.classList.remove( OPEN_CLASS_NAME );
      searchBtn.focus();
      document.removeEventListener( 'click', onSearchMissclick );
      document.removeEventListener( 'keydown', onEscKeydown );
    }
  };

  searchBtn.addEventListener( 'click', onSearchBtnClick );
};