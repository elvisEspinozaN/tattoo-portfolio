import React from "react";
import "../src/styles/App.css";
import { ElevatedMsg } from "./layouts/HomePage/ElevatedMsg";
import { Hero } from "./layouts/HomePage/Hero";
import { OurTattoos } from "./layouts/HomePage/OurTattoos";
import { WhyChooseUs } from "./layouts/HomePage/WhyChooseUs";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ElevatedMsg />
      <OurTattoos />
      <WhyChooseUs />
    </div>
  );
}

export default App;
