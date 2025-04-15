import React from "react";

export default function KerjanjangModal(props) {
  props.togglerCart()
  return (
    <div className="static">
      <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-50" ></div>
      <div className="fixed h-full top-0 right-0 left-0 z-20 flex justify-end items-center ">
        <div className="h-full min-w-[250PX]  bg-Yellow_IDM rounded-l-2xl">
          <div className="flex justify-end">
            <button className="text-3xl  px-2 m-2" onClick={ () => props.togglerCart()
}>X</button>
          </div>

          <div className="">
            <p className="mt-2 text-2xl font-bold text-center">Keranjang</p>
          </div>
        </div>
      </div>
    </div>
  );
}
