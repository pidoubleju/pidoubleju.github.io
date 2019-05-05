import getData from './getData.js';
import createArtitstList from './artistListing.js';

getData('/me/top/artists').then(response => {
    const listingDomNode = document.querySelector('.artists__listing');
    createArtitstList(response, listingDomNode);
});