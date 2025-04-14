import React, { useState } from "react";
import { YummyChoice, PointCaffee } from "../../data/MenuDataDummy";
import delete_illustration from "../../assets/illustration/delete_illustration.png";

export default function CardProduct(props) {
  const item = YummyChoice.concat(PointCaffee).find(
    (element) => element.name === props.itemName
  );
  const [currentQuantity, setCurrentQuantity] = useState(props.itemCount);
  const [currentPrice, setCurrentPrice] = useState(item.price);

  const decrementQuantity = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
      props.onProductUpdate(-1, parseInt(currentPrice.split(".").join("")), {
        [item.name]: -1,
      });
    } else if (currentQuantity === 1) {
      // Special case: If quantity will reach 0, trigger removal
      setCurrentQuantity(0); // Optionally set to 0, or handle this directly in the removal logic
      props.onProductUpdate(
        -1,
        parseInt(currentPrice.split(".").join("")),
        { [item.name]: -1 },
        true // Indicate that this item should be removed
      );
    }
  };

  const handleDelete = () => {
    // Assuming item.price needs to be converted to a number as before
    const numericPrice = parseInt(item.price.split(".").join(""));

    // Trigger item removal and adjust the total quantity and price accordingly
    props.onProductUpdate(
      currentQuantity,
      numericPrice,
      { [item.name]: currentQuantity },
      true
    ); // Indicating removal
  };

  const incrementQuantity = () => {
    setCurrentQuantity(currentQuantity + 1);
    // Note the change here: we're now sending +1 to indicate an increment
    props.onProductUpdate(
      1, // Change to indicate increment
      parseInt(currentPrice.split(".").join("")),
      { [item.name]: 1 } // Indicates a single item increment
    );
  };

  return (
    <div className="grid grid-cols-12 border rounded-lg w-[800px] pb-4 pt-4 ">
      <div className="col-span-4 flex flex-row justify-center items-center ">
        <img src={item.image} alt="" />
      </div>
      <div className="col-span-8">
        <p className="text-3xl font-bold">
          {item.brand}
          <br />
          {item.name}
        </p>
        <p></p>
        <p className="text-end mt-5 text-Blue_IDM text-3xl pe-8 font-bold">
          Rp {item.price}
        </p>
        <div className=" flex flex-row gap-8">
          <button
            className="bg-gray-300 flex flex-row p-0 m-0 justify-center items-center gap-2 pe-2 ps-2 rounded-lg"
            onClick={handleDelete}
          >
            <img src={delete_illustration} alt="Delete" />
            <p>Hapus</p>
          </button>
          <div className="pe-3 ps-3 pb-1 bg-gray-300 rounded-lg text-2xl font-bold ">
            <p className="text-center m-0 p-0" onClick={decrementQuantity}>
              -
            </p>{" "}
          </div>
          <p className="text-2xl font-bold">{currentQuantity}</p>
          <div className="pe-2 ps-2 pb-1 bg-blue-500 text-white rounded-lg text-2xl font-bold ">
            <p className="text-center m-0 p-0" onClick={incrementQuantity}>
              +
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
