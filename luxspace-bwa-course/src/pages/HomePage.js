import react from "react";
import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowsTheRoom from "parts/HomePage/BrowsTheRoom";
import JustArrive from "parts/HomePage/JustArrive";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Clients from "parts/Clients";
import Document from "parts/Document";

export default function HomePage(){

    return(
        <Document>
            <Header/>
            <Hero/>
            <BrowsTheRoom/>
            <JustArrive/>
            <Clients/>
            <Sitemap/>
            <Footer/>
        </Document>
    )
} 