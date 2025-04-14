import TheRestoDbSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';

import {
  createRestoDetailTemplate,
  createDetailReviewTemplate,
  createLikeButtonTemplate,
} from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `
        <div class = 'resto__detail' id = 'restoDetail'></div>
        <div id = 'likeButtonContainer'></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailRestoItem(url.id);
    const detailContainer = document.querySelector('#restoDetail');
    detailContainer.innerHTML += createRestoDetailTemplate(resto);
    detailContainer.innerHTML += createDetailReviewTemplate(resto);

    const userName = document.querySelector('#userName');
    const userComment = document.querySelector('#userComment');
    const submitReviewButton = document.querySelector('#submitReview');

    submitReviewButton.addEventListener('click', async () => {
      if (userName.value === '' || userComment.value === '') {
        alert('Form cannot be empty, please fill the review form');
        userName.value = '';
        userComment.value = '';
      } else {
        const review = {
          id: resto.restaurant.id,
          name: userName.value,
          review: userComment.value,
        };
        const addReview = await TheRestoDbSource.addReview(review);
        console.log(addReview);
      }
    });

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML += createLikeButtonTemplate();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        pictureId: resto.restaurant.pictureId,
        city: resto.restaurant.city,
        rating: resto.restaurant.rating,
        description: resto.restaurant.description,
      },
    });
  },
};

export default DetailPage;
