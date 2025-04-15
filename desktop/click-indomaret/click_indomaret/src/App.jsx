import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MenuSearch from "./views/MenuSearch.jsx";
import StartingPage from "./views/StartingPage.jsx";
import CheckPesanan from "./views/CheckPesanan.jsx";
import PilihPembayaran from "./views/PilihPembayaran.jsx";
import ScanBarcode from "./views/ScanBarcode.jsx";
import MasukanKartuBank from "./views/MasukanKartuBank.jsx";
import PembayaranBerhasil from "./views/PembayaranBerhasil.jsx";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<StartingPage />}></Route>
          <Route path="/MenuSearch" element={<MenuSearch />}></Route>
          <Route path="/CheckPesanan" element={<CheckPesanan />}></Route>
          <Route path="/PilihPembayaran" element={<PilihPembayaran />}></Route>
          <Route path="/ScanBarcode" element={<ScanBarcode />}></Route>
          <Route
            path="/PembayaranBerhasil"
            element={<PembayaranBerhasil />}
          ></Route>
          <Route
            path="/MasukanKartuBank"
            element={<MasukanKartuBank />}
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
