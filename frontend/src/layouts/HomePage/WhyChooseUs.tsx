import "../../styles/why-choose-us.css";

import art from "../../images/svg/art.svg";
import booking from "../../images/svg/booking.svg";
import mail from "../../images/svg/mail.svg";

export const WhyChooseUs = () => {
  return (
    <div className="why-us-section">
      <p className="section-title">why choose us?</p>
      <div className="container">
        <div className="col-12 row p-0 m-0 align-items-center justify-content-center">
          <div className="why-us-card col-md-4 col-12 justify-content-center">
            <img src={art} alt="artwork icon" className="w-100" />
            <h5 className="font-weight-bold text-uppercase text-center mt-2">
              original artwork
            </h5>
            <p className="text-center">ink that tells your story.</p>
          </div>
          <div className="why-us-card col-md-4 col-12 justify-content-center">
            <img src={booking} alt="calendar icon" className="w-100" />
            <h5 className="font-weight-bold text-uppercase text-center mt-2">
              booking calendar
            </h5>
            <p className="text-center">
              secure your session in the artist's chair.
            </p>
          </div>
          <div className="why-us-card col-md-4 col-12 justify-content-center">
            <img src={mail} alt="mail icon" className="w-100" />
            <h5 className="font-weight-bold text-uppercase text-center mt-2">
              get in touch
            </h5>
            <p className="text-center">
              start your tattoo journey wiht us today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
