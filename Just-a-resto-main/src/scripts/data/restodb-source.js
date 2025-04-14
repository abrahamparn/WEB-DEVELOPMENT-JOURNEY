import API_ENDPOINT from "../globals/api-endpoint";

class TheRestoDbSource {
  static async homeRestoList() {
    const response = await fetch(API_ENDPOINT.HOME_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestoItem(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview(review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response.json();
  }
}

export default TheRestoDbSource;
