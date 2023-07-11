import React from "react";
import "../src/styles/App.css";
import { ContactUs } from "./layouts/HomePage/ContactUs";
import { ElevatedMsg } from "./layouts/HomePage/ElevatedMsg";
import { Hero } from "./layouts/HomePage/Hero";
import { Location } from "./layouts/HomePage/Location";
import { OurTattoos } from "./layouts/HomePage/OurTattoos";
import { TattooCarousel } from "./layouts/HomePage/TattooCarousel";
import { WhyChooseUs } from "./layouts/HomePage/WhyChooseUs";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ElevatedMsg />
      <OurTattoos />
      <WhyChooseUs />
      <Location />
      <ContactUs />
      <TattooCarousel />
      <Footer />
    </div>
  );
}

export default App;
