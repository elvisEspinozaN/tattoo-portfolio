import "../../styles/navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar-section">
      <div className="section-container">
        <nav className="d-flex align-items-center navbar navbar-expand-lg d-flex justify-content-between align-items-center row col-12 p-0 m-0">
          <a
            className="nav-brand col-2 justify-content-start align-items-center p-0"
            href="#"
          >
            <h4>SP Gallery</h4>
          </a>

          <div
            className={`collapse navbar-collapse ${
              isDropdownOpen ? "show" : ""
            } justify-content-center width`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav d-flex mt-4">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  artist
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  contact us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  faq
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-sales">
                  book appointment
                </a>
              </li>
            </ul>
          </div>

          <div
            className="nav-sidebar col-2"
            data-toggle="collapse"
            data-target="#collapseWidthExample"
            aria-controls="collapseWidthExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <button
              className={`navbar-toggler ${isDropdownOpen ? "collapsed" : ""}`}
              type="button"
              data-bs-target="#navbarNavDropdown"
              data-bs-toggle="collapse"
              aria-controls="navbarNavDropdown"
              aria-expanded={isDropdownOpen ? "true" : "false"}
              aria-label="Toggle navigation"
              onClick={toggleDropdown}
            >
              <span>
                {isDropdownOpen ? (
                  <AiOutlineClose className="nav-sidebar-icon nav-icon p-1" />
                ) : (
                  <AiOutlineMenu className="nav-sidebar-icon nav-icon p-1" />
                )}
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
