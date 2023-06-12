import "../../styles/location.css";

import location from "../../images/location/location.jpg";

export const Location = () => {
  return (
    <div className="location-section section">
      <div className="container">
        <div className="row col-12 d-flex justify-content-between align-items-center m-0 p-0">
          <div className="col-md-7 justify-content-center">
            <img src={location} alt="" className="w-100" />
          </div>

          <div className="col-md-5 justify-content-center">
            <div className="location-info">
              <h2 className="text-uppercase font-weight-bold">Our Shop</h2>
              <p className="text-uppercase font-weight-lighter">
                <span className="font-weight-bold">"SP Gallery"</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus
                temporibus praesentium optio, id dignissimos aperiam quae minima
                eum unde architecto accusamus voluptatibus, autem in saepe. Odit
                maiores doloremque quibusdam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
