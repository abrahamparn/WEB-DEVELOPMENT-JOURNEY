import React from "react";
import { Link } from "react-router-dom";
import B_Frappe from "../assets/banner/B_Frappe.png";
import makan_disini from "../assets/illustration/makan_disini.png";
import bawa_pulang from "../assets/illustration/bawa_pulang.png";
import indomaret from "../assets/indomaret.png";
export default function StartingFile() {
  return (
    <div className="flex flex-col mx-0 pb-20">
      <div className="w-full bg-red-500">
        <img src={B_Frappe} className="object-fill bg-black w-full " />
      </div>
      <div className="w-full justify-center items-center flex mt-36">
        <img src={indomaret} className="lg:w-[400px] idm:w-[450px]" />
      </div>
      <div className="w-full justify-center items-center flex lg:gap-36 mt-36 md:gap-10">
        <div>
          <Link to="MenuSearch">
            <img src={makan_disini} className="md:w-72 lg:w-full" />
          </Link>
          <p className="text-center md:text-4xl lg:text-5xl mt-10 font-bold">
            Makan di Sini
          </p>
        </div>
        <div>
          <img src={bawa_pulang} className="md:w-72 lg:w-full" />
          <p className="text-center md:text-4xl lg:text-5xl mt-10 font-bold">
            Bawa Pulang
          </p>
        </div>
      </div>
    </div>
  );
}
