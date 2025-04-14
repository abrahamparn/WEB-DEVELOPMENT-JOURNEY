import React from "react";

export default function MenuCardResponcive(props) {
  return (
    <div className={`max-w-card flex flex-col justify-center items-center`}>
      <div className="border-2 rounded-lg border-gray-400 min-w-[150px] min-h-[150px] max-w-[198.76px] max-h-[198.14px] flex items-center">
        <img src={props.image} />
      </div>
      {/* Buat isi foto */}
      <p className={`text-base text-center mb-2`}>
        {props.brand} {props.name}
      </p>
      <button
        className="bg-Blue_IDM rounded-lg text-white text-2xl font-semibold pe-4 ps-4 pt-2 pb-2 active:bg-Red_IDM"
        onClick={props.onClick}
      >
        Rp {props.price}
      </button>
    </div>
  );
}
