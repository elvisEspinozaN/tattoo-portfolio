import "../../styles/our-tattoos.css";
import tattooImg from "../../images/tattoo-img/tattoo-img.jpg";

export const OurTattoos = () => {
  return (
    <div className="hot-section">
      <div className="container">
        <h3 className="font-weight-bold text-uppercase col text-center m-3">
          Our Tattoos
        </h3>
        <div className="col-12 row m-0 p-0 d-flex">
          <div className="hot-item col-md-4">
            <img
              src={tattooImg}
              alt="tattoo sample"
              className="w-100 hot-img"
            />
            <button className="hot-btn">Desc.</button>
          </div>
          <div className="hot-item col-md-4">
            <img
              src={tattooImg}
              alt="tattoo sample"
              className="w-100 hot-img"
            />
            <button className="hot-btn">Desc.</button>
          </div>
          <div className="hot-item col-md-4">
            <img
              src={tattooImg}
              alt="tattoo sample"
              className="w-100 hot-img"
            />
            <button className="hot-btn">Desc.</button>
          </div>
        </div>
      </div>
    </div>
  );
};
