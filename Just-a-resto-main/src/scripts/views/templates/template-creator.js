import CONFIG from "../../globals/config";

const createRestoDetailTemplate = (resto) => `
    <h2 tabindex = "0" class = "detail__title">${resto.restaurant.name}</h2>
    <img tabindex = "0" class = "detail__picture lazyload" data-src = "${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" alt = "${resto.restaurant.name}" />

    <div class = "detail__info">
        <h3 tabindex = "0">All About the Restaurant</h3><br>
        <h4 tabindex = "0">The City</h4>
          <p tabindex = "0">${resto.restaurant.city}</p><br>
          
        <h4 tabindex = "0">The Address</h4>
          <p tabindex="0">${resto.restaurant.address}</p><br>

        <h4 tabindex = "0">The Food that They Offer</h4>
          <p tabindex = "0">${resto.restaurant.menus.foods.map((food) => food.name)}</p><br>

        <h4 tabindex = "0">The Drink that They Offer</h4>
          <p tabindex="0">${resto.restaurant.menus.drinks.map((drink) => drink.name)}</p><br>

        <h4 tabindex = "0">Rating</h4>
          <p tabindex = "0" class = "rating">⭐️ ${resto.restaurant.rating}/5</p>
    </div>

    <div class = "detail__desc">
        <h3 tabindex = "0">Description</h3>
        <p tabindex = "0">${resto.restaurant.description}</p>
    </div>
  `;

const createDetailReviewTemplate = (resto) => ` 
<div class = "review">
  <h3 tabindex = "0" class = "review__title">User Reviews</h3>
  
  <form id = "formReview" class = "review__form">
    <label tabindex = "0" for = "userName">Name :</label><br>
    <input type = "text" class = "review__username" id = "userName" name = "fname"><br>
    <label  tabindex = "0" for = "userComment">Comment:</label><br>
    <input type = "text" class = "review__usercomment" id = "userComment" name = "userComment"><br>
    <input type = "submit" value = "Submit" id = "submitReview">
  </form>

    ${resto.restaurant.customerReviews.map((customer) => `
      <div tabindex = "0" class="review__item">
        <div tabindex = "0" class = "review__desc"><br>
          <h3 tabindex = "0" ><i class = "user fa fa-user"></i>${customer.name}</h3>
          <h4 tabindex = "0">${customer.date}</h3>
          <p tabindex = "0">${customer.review}</h3><br>
        </div>
      </div>
    `)
    .join("")}
</div>
  `;

const createRestoItemTemplate = (resto) => `
    <article class = "resto__item">
      <img tabindex = "0" class = "resto__image lazyload" data-src = "${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt = "${resto.name} Image Restaurant"/>
      <h3 tabindex = "0" class = "resto__title"><a href = "${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
      <h4 tabindex = "0" class = "resto__location">Location: ${resto.city}</h4>
      <h5 tabindex = "0" class = "resto__rating">⭐️ ${resto.rating}/5</h5><br>
      <p tabindex="0"> ${resto.description}</p>
    </article>
  `;

const createLikeButtonTemplate = () => `
<button aria-label = "like the resto" id = "likeButton" class = "like">
   <i class = "fa fa-heart-o" aria-hidden = "true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label = "unlike this resto" id = "likeButton" class = "like">
  <i class = "fa fa-heart" aria-hidden = "true"></i>
</button>
`;

export {
  createDetailReviewTemplate,
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
