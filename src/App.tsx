import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppNavbar from "./components/app-navbar/AppNavbar";
import Tabs from "./components/tabs/Tabs";

function App() {
  return (
    <main>
      <AppNavbar />
      <Tabs />
    </main>
  );
}

export default App;
