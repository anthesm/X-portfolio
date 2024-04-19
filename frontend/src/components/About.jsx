import React from "react";

const About = () => {
  return (
<div className="container py-5 mt-5">
  <div className="row">
    <div className="col-lg-4 mb-4">
      <div className="bg-light shadow p-4">
        <h2 className="text-dark text-center mb-4">Educational Background</h2>
        <ul className="list-group">
          <li className="list-group-item">Tenth Pass with 84% marks</li>
          <li className="list-group-item">Secondary Pass with 69% marks</li>
          <li className="list-group-item">Diploma in Computer Engineering</li>
        </ul>
      </div>
    </div>
    <div className="col-lg-4 mb-4">
      <div className="bg-light shadow p-4">
        <h2 className="text-dark text-center mb-4">Professional Background</h2>
        <ul className="list-group">
          <li className="list-group-item">Fresher</li>
        </ul>
      </div>
    </div>
    <div className="col-lg-4 mb-4">
      <div className="bg-light shadow p-4">
        <h2 className="text-dark text-center mb-4">Interests and Activities</h2>
        <ul className="list-group">
          <li className="list-group-item">Writing</li>
          <li className="list-group-item">Singing</li>
          <li className="list-group-item">Listening</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
