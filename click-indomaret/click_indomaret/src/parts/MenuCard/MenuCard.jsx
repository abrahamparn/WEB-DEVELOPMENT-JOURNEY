import React from "react";
import { useLocation } from "react-router-dom";

export default function MenuCard(props) {
  return (
    <div
      className="max-w-card flex flex-col justify-center items-center"
      onClick={() => props.toggler()}
    >
      <div className="border-2 rounded-lg border-gray-400 min-w-[198.76px] min-h-[198.14px] max-w-[198.76px] max-h-[198.14px] flex items-center">
        <img src={props.image} />
      </div>
      {/* Buat isi foto */}
      <p className="text-lg text-center mb-5 mt-2">
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
