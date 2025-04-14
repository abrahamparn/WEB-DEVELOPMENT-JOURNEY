import carImg from "./unsplash.jpg";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Img from "./Img";
import Main from "./Main";
import Footer from "./Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container fullheight">
    <div className="flex-direction">
      <Img />
      <Main />
      <Footer />
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
