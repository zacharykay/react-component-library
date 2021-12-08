import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppNavbar from "./components/app-navbar/AppNavbar";
import Tabs from "./components/tabs-block/Tabs";
import MultiCarousel from "./components/carousel/Multi-Carousel";

function App() {
  return (
    <main>
      <AppNavbar />
      <Tabs />
      <MultiCarousel />
    </main>
  );
}

export default App;
