import React, { useState } from "react";
import bayar from "../assets/illustration/bayar.png";
import indomaret from "../assets/indomaret.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import isaku from "../assets/pembayaran/isaku.png";
import dll from "../assets/pembayaran/dll.png";
import debit from "../assets/pembayaran/debit.png";
export default function PilihPembayaran(props) {
  const location = useLocation();
  console.log(location);
  const final = location.state.activeProductPP;
  const [statePayment, setStatePayment] = useState(final);

  return (
    <div className="flex flex-col mx-0">
      <div className="w-full justify-center items-center flex mt-5">
        <img src={indomaret} className="lg:w-[350px] idm:w-[400px]" />
      </div>
      <div className="flex flex-col items-center mt-10 ">
        <img src={bayar} className="w-2/4" />

        <p
          className="mt-8 text-5xl font-bold"
          onClick={() => {
            console.log(statePayment);
          }}
        >
          Pilih Pembayaran
        </p>

        <div className="flex flex-row gap-4 mt-10">
          <Link to="/ScanBarcode" state={{ activeProductPP: statePayment }}>
            <div>
              <img src={isaku} />
              <p className="text-3xl mt-2 text-center">I.saku</p>
            </div>
          </Link>
          <Link to="/ScanBarcode" state={{ activeProductPP: statePayment }}>
            <div>
              <img src={dll} />
              <p className="text-3xl mt-2 text-center">Dompet Digital</p>
            </div>
          </Link>
        </div>
        <div className="mt-5 min-h-[800px] ">
          <Link to="/ScanBarcode" state={{ activeProductPP: statePayment }}>
            <img src={debit} />
            <p className="text-3xl mt-2 text-center">Debit</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
