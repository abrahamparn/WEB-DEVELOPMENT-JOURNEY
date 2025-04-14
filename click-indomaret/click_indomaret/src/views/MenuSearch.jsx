import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import B_Frappe from "../assets/banner/B_Frappe.png";
import mister_donut from "../assets/menu/mister_donut.png";
import point_caffee from "../assets/menu/point_caffee.png";
import say_bread from "../assets/menu/say_bread.png";
import say_burger from "../assets/menu/say_burger.png";
import washoku_sato from "../assets/menu/washoku_sato.png";
import yummy_choice from "../assets/menu/yummy_choice.png";
import indomaret from "../assets/indomaret.png";
import shopping_basket from "../assets/illustration/shopping-basket.png";

import MenuCard from "../parts/MenuCard/MenuCard.jsx";
import { YummyChoice, PointCaffee } from "../data/MenuDataDummy";
import { useLocation } from "react-router-dom";

//For Modal Product
import ProductModal from "../components/Modal/ProductModal.jsx";
import useToggle from "../Hooks/useToggle.js";

//For Modal Keranjang
import KerjanjangModal from "../components/Modal/KerjanjangModal.jsx";
import useToggleCart from "../Hooks/useToggleCart.js";

export default function StartingFile() {
  const [activeMenu, setActiveMenu] = useState("YummyChoice"); // Initial active menu state
  const [activeProduct, setActiveProduct] = useState([0, 0, {}]);

  const handleProductUpdate = (quantity, price, name) => {
    // Destructuring the name object to get key and value
    const [productName, productQuantity] = Object.entries(name)[0];

    // Updating the product details object
    const updatedProductDetails = {
      ...activeProduct[2],
      [productName]: (activeProduct[2][productName] || 0) + productQuantity,
    };

    // Setting the new state
    setActiveProduct([
      activeProduct[0] + quantity,
      activeProduct[1] + quantity * price,
      updatedProductDetails,
    ]);
  };
  // For React
  const { on, toggler } = useToggle();
  const { onCart, togglerCart } = useToggleCart();

  // for modal
  const [selectedItem, setSelectedItem] = useState(null);

  // for going back
  const location = useLocation();
  useEffect(() => {
    if (location.state?.theSelectedProduct) {
      setActiveProduct(location.state.theSelectedProduct);
    }
  }, [location.state]);
  return (
    <div className="flex flex-col mx-0 pb-20">
      {onCart && <KerjanjangModal togglerCart={togglerCart} />}
      {
        on && (
          <ProductModal
            toggler={toggler}
            image={selectedItem.image}
            price={selectedItem.price}
            name={selectedItem.name}
            brand={selectedItem.brand}
            onProductUpdate={handleProductUpdate}
          />
        ) /** just added */
      }

      <div className="w-full bg-red-500">
        <img src={B_Frappe} className="object-fill bg-black w-full " />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4 ">
        <div className="col-span-1 flex flex-col justify-top ps-9 pe-9">
          <img src={indomaret} className="mb-5" />
          <img
            src={yummy_choice}
            className="mb-5"
            onClick={() => setActiveMenu("YummyChoice")}
          />
          <img src={say_bread} className="mb-5" />
          <img src={washoku_sato} className="mb-5" />
          <img src={say_burger} className="mb-5" />
          <img src={mister_donut} className="mb-5" />
          <img
            src={point_caffee}
            className="mb-5"
            onClick={() => setActiveMenu("PointCaffee")}
          />
        </div>
        <div className="col-span-3 flex flex-col mb-5">
          <div className="grid grid-cols-3 gap-12">
            <div className="col-span-2">
              <input
                type="text"
                className="pl-2 w-full h-10 border-solid border-2 border-gray-300 rounded-md focus:outline-none focus:border-gray-300 active:border-gray-300 text-gray-400"
                placeholder="Mau pesan apa?"
              />
            </div>
            <div className="col-span-1">
              <button
                className="flex items-center h-10 bg-Red_IDM text-white p-1 pe-5 ps-5 rounded-lg active:bg-Blue_IDM"
                onClick={togglerCart}
              >
                <img src={shopping_basket} alt="Icon" className="mr-2 w-6" />
                <strong>Keranjang</strong>
              </button>
            </div>
          </div>
          <div className="mt-5 ">
            <div className="grid grid-cols-3  gap-y-6 md:h-[1080px] idm:h-[1193px] overflow-y-auto no-scrollbar scrollbar-hide">
              {activeMenu === "YummyChoice" &&
                YummyChoice.map((item, index) => (
                  <MenuCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    brand={item.brand}
                    onClick={() => {
                      setSelectedItem({
                        image: item.image,
                        name: item.name,
                        price: item.price,
                        brand: item.brand,
                      });
                    }}
                    toggler={toggler}
                  />
                ))}
              {activeMenu === "PointCaffee" &&
                PointCaffee.map((item, index) => (
                  <MenuCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    brand={item.brand}
                    onClick={() => {
                      setSelectedItem({
                        image: item.image,
                        name: item.name,
                        price: item.price,
                        brand: item.brand,
                      });
                    }}
                    toggler={toggler}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-8 border-t-4 border-gray-370">
        <div className=" col-span-5 flex flex-col ms-12 mt-5">
          <p className="text-3xl font-semibold mb-5">
            Total Produk: {activeProduct[0]}
          </p>
          <p className="text-6xl font-bold mb-5">Rp {activeProduct[1]}</p>
        </div>
        <div className="col-span-3 pt-10 me-10 ">
          <Link to="/CheckPesanan" state={{ activeProduct: activeProduct }}>
            <button
              className="font-bold w-full h-full bg-Red_IDM rounded-lg text-white text-6xl active:bg-Blue_IDM"
              onClick={() => console.log(activeProduct[2])}
            >
              Bayar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
