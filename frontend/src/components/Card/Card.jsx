// Card.js
import React from 'react';

const Card = ({ title, description, image, link }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow">
        <img className="card-img-top" src={image} alt={title}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-success">Explore Now</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
