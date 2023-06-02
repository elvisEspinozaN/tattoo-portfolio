import React from "react";
import "../src/styles/App.css";
import { ElevatedMsg } from "./layouts/HomePage/ElevatedMsg";
import { Hero } from "./layouts/HomePage/Hero";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ElevatedMsg />
    </div>
  );
}

export default App;
