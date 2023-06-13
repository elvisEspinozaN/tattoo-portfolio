import "../../styles/footer.css";

export const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row col-12 p-0 m-0">
          <div className="col-md-6">
            <a href="#" className="d-flex align-items-center">
              <h3 className="text-uppercase text-white font-weight-bold m-0">
                SP Gallery.
              </h3>
            </a>
          </div>
          <div className="col-md-3 social-media">
            <ul>
              <li>
                <a href="#" className="footer-link">
                  instagram
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  tiktok
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  faq
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  aftercare
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  policy service
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 help-center">
            <ul>
              <li className="footer-title">open daily, 10 AM - 8 PM</li>
              <li>
                <a href="#" className="footer-link">
                  book your appointment
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  addresses
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  press inquiries
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  term of service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-white text-uppercase text-center p-4">
          copyright © 2023 all rights reserved
        </p>
      </div>
    </div>
  );
};
