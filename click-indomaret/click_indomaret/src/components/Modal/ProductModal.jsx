import React, { useState } from "react";
import { YummyChoice, PointCaffee } from "../../data/MenuDataDummy";
import MenuCardResponcive from "../../parts/MenuCard/MenuCardResponcive";
export default function ProductModal(props) {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(props.price);

  const decrementQuantity = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
    }
  };

  const incrementQuantity = () => {
    setCurrentQuantity(currentQuantity + 1);
  };

  const handleOrderClick = () => {
    props.onProductUpdate(
      currentQuantity,
      parseInt(currentPrice.split(".").join("")),
      { [props.name]: currentQuantity }
    );

    props.toggler();
  };

  return (
    <div className="static">
      <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-50"></div>
      <div className="fixed h-full top-0 right-0 left-0 z-20 flex justify-center items-center">
        <div className="mx-4 my-4 bg-white max-w-[600PX]">
          <div className="flex justify-end">
            <button
              onClick={() => props.toggler()}
              className="text-3xl  px-2 m-2"
            >
              X
            </button>
          </div>

          <div className="grid grid-cols-10 gap-10 m-5 mt-0 ">
            <div className="col-span-4">
              <img src={props.image} />
            </div>
            <div className="col-span-6">
              <p className="font-bold text-2xl leading-10">
                {props.brand} <br /> {props.name}
              </p>
              <p className="mb-5 text-lg">
                Paket nasi bakar yang disajikan dengan ayam geprek sambal madura
                dan kemangi yang harum, gurih, dan pedas.
              </p>
              <p className="text-blue-600 font-bold text-3xl mb-4">
                Rp {props.price}
              </p>
              <div className="flex flex-row mt-3 gap-10">
                <div className="pe-3 ps-3 pb-1 bg-gray-300 rounded-lg text-2xl font-bold ">
                  <p
                    className="text-center m-0 p-0"
                    onClick={decrementQuantity}
                  >
                    -
                  </p>
                </div>
                <p className="text-2xl font-bold">{currentQuantity}</p>
                <div className="pe-2 ps-2 pb-1 bg-blue-500 text-white rounded-lg text-2xl font-bold ">
                  <p
                    className="text-center m-0 p-0"
                    onClick={incrementQuantity}
                  >
                    +
                  </p>
                </div>
              </div>
              <button
                className="bg-red-600 text-white ps-10 pe-10 pt-2 pb-2 mt-4 rounded-md"
                onClick={handleOrderClick}
              >
                Pesan
              </button>
            </div>
          </div>
          <div className="border-t-2  m-5 mb-3">
            <p className="mt-2 text-xl">Rekomendasi dari kami</p>
            <div className="flex flex-row gap-3 overflow-x-auto no-scrollbar scrollbar-hide">
              {YummyChoice.map((item, index) => (
                <div>
                  <MenuCardResponcive
                    key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    brand={item.brand}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
