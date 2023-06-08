import "../../styles/our-tattoos.css";
import { ReturnTattoo } from "./ReturnTattoo";

export const OurTattoos = () => {
  return (
    <div className="hot-section">
      <div className="container">
        <h3 className="font-weight-bold text-uppercase col text-center m-3">
          Our Tattoos
        </h3>
        <div className="col-12 row m-0 p-0 d-flex">
          <ReturnTattoo />
          <ReturnTattoo />
          <ReturnTattoo />
        </div>
      </div>
    </div>
  );
};
