import "../../styles/contact-us.css";

import locationIcon from "../../images/contact-us/locationIcon.png";
import instagramIcon from "../../images/contact-us/instagramIcon.png";
import instagramIconBlack from "../../images/contact-us/instagramIconBlack.png";
import picture from "../../images/contact-us/picture.jpg";

export const ContactUs = () => {
  return (
    <div className="contact-section section">
      <div className="container">
        <div className="row col-12 p-0 m-0 align-items-center">
          <div className="contact-content col-md-7">
            <div>
              <h2 className="font-weight-bold">contact us</h2>
              <p className="font-weight-lighter">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                veritatis, expedita excepturi vel, quisquam quam officiis quod
                cupiditate sit ut consequuntur est, autem pariatur aperiam amet
                qui quae eos. Minima!
              </p>
            </div>
            <div className="row p-0 m-0">
              <div className="col-sm-6 pl-0 pt-2">
                <img
                  src={locationIcon}
                  alt="location pin icon"
                  className="contact-icon"
                />
                <h4>location</h4>
                <p className="font-weight-lighter">find us at our locations</p>
                <button className="contact-btn d-flex align-items-center">
                  <a href="#">find us here</a>
                </button>
              </div>
              <div className="col-sm-6 pl-0 pt-2">
                <img
                  src={instagramIcon}
                  alt="instagram icon"
                  className="contact-icon"
                />
                <h4 className="font-weight-bold">check us out</h4>
                <p>Don't forget to check us out on Instagram!</p>
                <button className="contact-btn d-flex align-items-center">
                  <img
                    src={instagramIconBlack}
                    alt="black instagram icon"
                    className="mr-1"
                  />
                  <span>check us out now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="reach-img d-flex col-md-5">
            <img src={picture} alt="filler img" className="picture w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};
