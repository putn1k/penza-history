export const initShowerLocations = () => {
  const btn = document.querySelector( '#location-show-btn' );
  const list = document.querySelector( '#location-list' );

  if ( !btn || !list ) return;

  btn.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();

    Array.from( list.children ).forEach( item => item.classList.remove( 'visually-hidden' ) );
    btn.disabled = true;
  } );

};