import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
<div className="container-fluid justify-content-between py-5 mt-5 pt-5 d-flex flex-column flex-md-row bg-light shadow">
  <div className="content text-center text-md-right mt-5 pt-5 text-dark px-4 px-md-5">
    <h3 className="mb-3">Hi</h3>
    <h1 className="mb-4">I'm Ashish</h1>
    <h2 className="mb-4">A Frontend Developer</h2>
    <p>
      Hey there! I'm diving into frontend development, building sleek and
      user-friendly designs using HTML, CSS, and JavaScript. Always up for
      learning, I bring creativity and a sharp eye for detail to every
      project.
    </p>
  </div>
  <div className="container-fluid mt-5 mb-4 text-center text-md-left d-flex flex-column justify-content-end px-4 px-md-5">
    <div className="mb-3">
      <a href="./Data/Resume.pdf" className="btn btn-lg btn-outline-dark px-5 py-3 m-lg-4 mb-2" download>
        Resume
      </a>
      <Link to={"/projects"} className="btn btn-lg btn-dark px-5 py-3">
        Portfolio
      </Link>
    </div>
  </div>
</div>



  );
};

export default Hero;
