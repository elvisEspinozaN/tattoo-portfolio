import React, { useEffect, useRef } from "react";
import "../../styles/hero.css";

// images
import heroOne from "../../images/hero-slides/hero-one.jpg";
import heroTwo from "../../images/hero-slides/hero-two.jpg";
import heroThree from "../../images/hero-slides/hero-three.jpg";

export const Hero = () => {
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const nextButton = nextButtonRef.current;
    if (nextButton) {
      nextButton.click();
    }
  }, []);

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="hero-carousel-img-container">
            <img
              src={heroOne}
              className="hero-carousel-img d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-form">
            <span className="carousel-title">Welcome to SP Gallery</span>
            <p className="carousel-desc">
              Explore unique tattoo designs and styles.
            </p>
            <button className="btn carousel-btn-shop">
              Book Your Appointment
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <div className="hero-carousel-img-container">
            <img
              src={heroTwo}
              className="hero-carousel-img d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-form">
            <span className="carousel-title">Custom Tattoos</span>
            <p className="carousel-desc">
              Express your individuality with our expert artists.
            </p>
            <button className="btn carousel-btn-shop">
              Explore Our Collection
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <div className="hero-carousel-img-container">
            <img
              src={heroThree}
              className="hero-carousel-img d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-form">
            <span className="carousel-title">Tattoo Consultation</span>
            <p className="carousel-desc">
              Get a personalized consultation for your dream tattoo.
            </p>
            <button className="btn carousel-btn-shop">
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        ref={nextButtonRef}
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next" // Use data-bs-slide instead of data-slide
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
