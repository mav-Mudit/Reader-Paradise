import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FreeBook from "./components/FreeBook";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <FreeBook></FreeBook>
      <Footer></Footer>
    </>
  );
}
