import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "./Card/images/p2.jpg"; // Corrected import path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayContent, setDisplayContent] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (content) => {
    setDisplayContent(content);
    setIsOpen(false); // Close the navbar after a link is clicked
  };

  return (
    <>
      <div className="nav">
        <nav
          className="navbar navbar-expand-lg bg-light fixed-left"
          style={{
            height: "100vh",
            width: isOpen || windowWidth < 768 ? "100%" : "20rem",
            display: "block",
          }}
        >
          <div className="mx-1 px-1 py-2 d-flex justify-content-center">
            <img
              src={Profile}
              alt="profile"
              style={{ maxWidth: "100%", height: "150px", borderRadius: "50%" }}
            />
          </div>

          <div className="title px-4">
            <h2 className="text-dark">ASHISH</h2>
            <p className="text-muted">Developer</p>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse mx-4 ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-dark"
                  onClick={() => handleNavLinkClick("Introduction")}
                >
                  Introduction
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-link text-dark"
                  onClick={() => handleNavLinkClick("Projects")}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link text-dark"
                  onClick={() => handleNavLinkClick("About")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link text-dark"
                  onClick={() => handleNavLinkClick("Contact")}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="./Data/Resume.pdf"
                  className="btn btn-dark mt-3"
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="display">
        {/* Render additional content here based on the displayContent state */}
      </div>
    </>
  );
};

export default Navbar;
