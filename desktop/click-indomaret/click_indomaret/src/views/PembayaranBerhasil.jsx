import React, { useState } from "react";
import bayar from "../assets/illustration/bayar.png";
import indomaret from "../assets/indomaret.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import debit from "../assets/pembayaran/debit.png";
export default function PembayaranBerhasil() {
  return (
    <div className="flex flex-col mx-0">
      <div className="w-full justify-center items-center flex mt-5">
        <img src={indomaret} className="lg:w-[350px] idm:w-[400px]" />
      </div>
      <div className="flex flex-col items-center m-10 ">
        <img src={bayar} className="w-2/4" />

        <p className="mt-8 text-5xl font-bold text-center mb-10">
          Pembayaran Berhasil!
        </p>
        <div className="border-2 border-gray-400 w-[900PX] mt-5 p-5 bg-Yellow_IDM">
          <p className="text-4xl text-center">Nomor Antrian Anda:</p>
          <p className="text-6xl text-center font-bold mt-2">PG001</p>
        </div>
        <div className="">
          <ol className="list-decimal text-3xl">
            <li>Silahkan tunggu pesanan anda di meja yang tersedias</li>
            <li>
              Ketika nomor antrian anda muncul di layar, anda dapat mengambil di
              konter yang tersedia
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-5 min-h-[800px] "></div>
    </div>
  );
}
