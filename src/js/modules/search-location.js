const MIN_SEARCH_LENGTH = 1;
const NO_RESULT_MESSAGE = 'Не найдено';
let locationDatabase = [];

const getLocationDB = ( arrDB = null ) => {
  return new Promise( ( resolve ) => {
    const locations = document.querySelectorAll( '[data-location]' );
    locations.forEach( location => {
      arrDB.push( {
        title: location.textContent,
        link: location.href,
        oldNames: location.dataset.oldNames ? location.dataset.oldNames : null,
      } );
    } );
    resolve();
  } );
};

const createDataBase = ( arrDB ) => {
  if ( !arrDB ) return;
  return getLocationDB( arrDB );
};

const searchLocations = ( query, database ) => {
  const lowerQuery = query.toLowerCase().trim();

  if ( !lowerQuery ) {
    return [];
  }

  return database.filter( item => {
    const lowerTitle = item.title.toLowerCase();
    return lowerTitle.includes( lowerQuery );
  } );
};

const setupResult = () => {
  const resultContainer = document.querySelector( '#searchform-result' );
  if ( !resultContainer ) return;

  return resultContainer;
};

const renderNoresult = () => {
  const resultNode = document.createElement( 'span' );
  const container = setupResult();
  resultNode.classList.add( 'searchform__result', 'searchform__result--nf' );
  resultNode.textContent = NO_RESULT_MESSAGE;

  container.innerHTML = '';
  container.appendChild( resultNode );
};

const renderResult = ( result ) => {
  const container = setupResult();
  container.innerHTML = '';

  result.forEach( location => {
    const resultNode = document.createElement( 'a' );
    resultNode.classList.add( 'searchform__result' );
    resultNode.textContent = location.oldNames ? `${location.title} (${location.oldNames})` : location.title;
    resultNode.href = location.link;
    container.appendChild( resultNode );
  } );
};


const onSearchInput = ( evt ) => {
  ( evt.target.value.length < ( MIN_SEARCH_LENGTH ) ) ?
  evt.target.classList.remove( 'is-filled' ): evt.target.classList.add( 'is-filled' );

  const result = searchLocations( evt.target.value, locationDatabase );
  if ( result.length === 0 ) {
    renderNoresult();
  } else {
    renderResult( result );
  }
};

async function initSearchLocations() {
  const searchForm = document.querySelector( '#location-search-form' );
  const locationList = document.querySelector( '#location-list' );

  if ( !searchForm || !locationList ) return;
  const searchInputNode = searchForm.querySelector( '[type="search"]' );
  searchInputNode.setAttribute( 'disabled', 'disabled' );


  try {
    await createDataBase( locationDatabase );

    searchInputNode.removeAttribute( 'disabled' );
    searchForm.addEventListener( 'submit', ( evt ) => {
      evt.preventDefault();
    } );

    searchInputNode.addEventListener( 'input', onSearchInput );

  } catch {
    throw new Error( 'Something went wrong' );
  }
}

export {
  initSearchLocations
};