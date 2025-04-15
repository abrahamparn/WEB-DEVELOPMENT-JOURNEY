import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pesan from "../assets/illustration/Pesan.png";
import indomaret from "../assets/indomaret.png";
import { useLocation } from "react-router-dom";
import CardProduct from "../components/card/CardProduct";

export default function CheckPesanan(props) {
  const location = useLocation();
  const { activeProduct } = location.state;
  const [statePayment, setStatePayment] = useState(activeProduct);

  const handleProductUpdate = (
    changeInQuantity,
    price,
    name,
    removeItem = false
  ) => {
    const [productName, productQuantityChange] = Object.entries(name)[0];
    const isIncrement = changeInQuantity > 0;

    if (removeItem) {
      // Calculate the quantity and price to subtract
      const quantityToRemove = statePayment[2][productName];
      const priceToRemove = quantityToRemove * price;

      // Remove the item from the details object
      const { [productName]: _, ...remainingProducts } = statePayment[2];

      // Update total quantity and price
      setStatePayment([
        statePayment[0] - quantityToRemove, // Subtract the item's quantity from the total
        statePayment[1] - priceToRemove, // Subtract the item's price contribution from the total
        remainingProducts,
      ]);
    } else {
      // Existing logic for increment/decrement without removal
      const newProductQuantity =
        (statePayment[2][productName] || 0) + productQuantityChange;
      const updatedProductDetails = {
        ...statePayment[2],
        [productName]: newProductQuantity,
      };

      setStatePayment([
        statePayment[0] + (isIncrement ? 1 : -1),
        statePayment[1] + (isIncrement ? 1 : -1) * price,
        updatedProductDetails,
      ]);
    }
  };

  return (
    <div className="flex flex-col mx-0">
      <div className="w-full justify-center items-center flex mt-5">
        <img
          src={indomaret}
          className="lg:w-[350px] idm:w-[400px]"
          onClick={() => console.log(statePayment)}
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        <img src={Pesan} className="w-2/4" />

        <p className="mt-8 text-5xl font-bold">Pesanan Anda</p>
        <div className="pt-4 max-h-[800px] min-h-[800px] overflow-y-auto ">
          {Object.keys(statePayment[2]).map((item, index) => (
            <div className="mt-3">
              <CardProduct
                key={index}
                itemName={item}
                itemCount={statePayment[2][item]}
                onProductUpdate={handleProductUpdate}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-2 flex flex-row p-10 justify-between items-center">
        <p className="text-5xl font-bold text-center items-center">
          Total: Rp {statePayment[1]}
        </p>
        <div className="flex flex-col gap-2">
          <Link to="/MenuSearch" state={{ theSelectedProduct: statePayment }}>
            <button className="bg-gray-300 ps-10 pe-10 pt-1 pb-1 rounded-[4px]">
              Kembali
            </button>
          </Link>
          <Link
            to="/PilihPembayaran"
            state={{ activeProductPP: statePayment }}
            onClick={() => {
              console.log(statePayment);
            }}
          >
            <button className="bg-Red_IDM text-white ps-10 pe-10 pt-3 pb-3 rounded-[4px] text-2xl">
              Bayar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
