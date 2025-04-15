import HomePage from "../views/pages/home-page";
import FavouritePage from "../views/pages/favourite-page";
import DetailPage from "../views/pages/detail-page";

const routes = {
  "/": HomePage, // default page
  "/home": HomePage,
  "/favourite": FavouritePage,
  "/detail/:id": DetailPage,
};

export default routes;
