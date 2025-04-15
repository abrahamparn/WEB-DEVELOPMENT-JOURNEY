const assert = require('assert');

Feature('Liking_Resto, Unliking_Resto, Add_Review_Resto');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.dontSeeElement('.resto__item');
});

Scenario('liking one resto', async ({ I }) => {
  I.dontSeeElement('.resto__item');
  I.amOnPage('/');
  I.seeElement('.resto__title a');

  const firstResto = locate(".resto__title a").first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement(".resto__item");
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario("unliking one restaurant", async ({ I }) => {
  I.dontSeeElement('.resto__item');
  I.amOnPage('/');
  I.seeElement('.resto__title a');

  const firstResto = locate(".resto__title a").first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement(".resto__item");
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  const likedResto = locate('.resto__title a').first();
  I.click(likedResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.dontSeeElement('.resto__item');
});

Scenario('add a review to a resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement(".resto__item");
  I.seeElement(".resto__title a");
  const firstResto = locate(".resto__title a").first();
  I.click(firstResto);

  I.seeElement('#userName');
  const userName = 'Test 123';
  I.fillField('#userName', userName);

  I.seeElement('#userComment');
  const userComment = 'Test 123';
  I.fillField('#userComment', userComment);

  I.seeElement('input[type=submit]');
  I.click('input[type=submit]');
  I.refreshPage();
  I.refreshPage();

  const userNamed = await I.grabTextFrom(
    locate(".review__desc h3").last(),
  );
  assert.equal(userName, userNamed);
});
