import React from "react";

import tattooImg from "../../images/tattoo-img/tattoo-img.jpg";
import { ReturnTattooCarousel } from "./ReturnTattooCarousel";

export const TattooCarousel = () => {
  return (
    <div className="container mt-4" style={{ height: 580 }}>
      <div className="homepage-carousel-title">
        <h3 className="text-uppercase text-center">Check out our work</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 d-none d-lg-block"
        data-bs-interval="false"
      >
        {/* Desktop */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnTattooCarousel />
              <ReturnTattooCarousel />
              <ReturnTattooCarousel />
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnTattooCarousel />
              <ReturnTattooCarousel />
              <ReturnTattooCarousel />
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnTattooCarousel />
              <ReturnTattooCarousel />
              <ReturnTattooCarousel />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* mobile */}
      <div className="d-lg-none mt-5 mb-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="text-center">
            <img src={tattooImg} alt="tattoo sample" width="251" height="333" />
          </div>
        </div>
      </div>
      <div className="homepage-carousel-title mt-1 text-center">
        <a href="#" className="btn btn-outline-secondary btn-lg mt-4">
          View More
        </a>
      </div>
    </div>
  );
};
