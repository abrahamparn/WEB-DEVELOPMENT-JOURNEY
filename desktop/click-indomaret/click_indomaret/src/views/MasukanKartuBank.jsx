import React, { useState } from "react";
import bayar from "../assets/illustration/bayar.png";
import indomaret from "../assets/indomaret.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import debit from "../assets/pembayaran/debit.png";

export default function MasukanKartuBank() {
  const location = useLocation();
  console.log(location);
  const final = location.state.activeProductPP;
  const [statePayment, setStatePayment] = useState(final);

  return (
    <div className="flex flex-col mx-0">
      <div className="w-full justify-center items-center flex mt-5">
        <img src={indomaret} className="lg:w-[350px] idm:w-[400px]" />
      </div>
      <div className="flex flex-col items-center m-10 ">
        <img src={bayar} className="w-2/4" />

        <p className="mt-8 text-5xl font-bold text-center">
          Silahkan masukkan kartu bank anda untuk melakukan pembayaran
        </p>
        <div className="border-2 border-gray-400 w-[900PX] mt-5 p-5">
          <p className="text-4xl text-center">Total:</p>
          <p className="text-6xl text-center font-bold mt-2">
            Rp{statePayment[1]}
          </p>
        </div>
        <Link to="/PembayaranBerhasil">
          <img src={debit} className="mt-16" />
        </Link>
      </div>

      <div className="mt-5 min-h-[800px] "></div>
    </div>
  );
}
