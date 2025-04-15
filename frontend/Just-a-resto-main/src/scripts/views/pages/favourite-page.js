import FavouriteRestoIdb from '../../data/favouriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const FavouritePage = {
  async render() {
    return `
        <h2 tabindex = "0" class = "explore__title" id="exploreTitle">My Favourite Restaurant</h2>
        <div id = "restoList" class = "resto"></div>
    `;
  },

  async afterRender() {
    const restos = await FavouriteRestoIdb.getAllRestaurants();
    const restoContainer = document.querySelector('#restoList');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default FavouritePage;
