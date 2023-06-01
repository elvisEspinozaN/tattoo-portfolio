import React from "react";
import "../src/styles/App.css";
import { Hero } from "./layouts/HomePage/Hero";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
