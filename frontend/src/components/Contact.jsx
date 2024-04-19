import React from "react";
import Comment from "./Comment";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
          {" "}
          {/* Added margin bottom for small devices */}
          <div className="social text-center text-md-right mb-5 mx-5">
            <h2 className="text-white mb-4 mx-5">Social Handles</h2>
            <p className="mx-5 my-5">
              <FaInstagram className="text-white" />{" "}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                Instagram
              </a>
            </p>
            <p className="mx-5">
              <FaLinkedin className="text-white" />{" "}
              <a
                href="https://www.linkedin.com/in/ashish-kumar-9890a7304/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-8">
          <div className="contact text-center text-md-left">
            <h2 className="text-white mb-4">Contact Form</h2>
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
