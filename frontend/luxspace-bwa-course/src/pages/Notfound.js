import React from 'react'
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import ErrorPageMessage from 'parts/ErrorPageMessage';
import Footer from "parts/Sitemap";
import Sitemap from "parts/Footer";
import Document from "parts/Document";
export default function Notfound() {
  return (
    <Document>
    <Header theme = "black"/>
    <ErrorPageMessage/>
   
    <Sitemap/> 
    <Footer/>
    </Document>

  )
}
