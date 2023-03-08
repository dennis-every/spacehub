import React from 'react';
import PropTypes from "prop-types";
const Rocket = ({ rocket_id, image, name, description }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <button type="button" id={rocket_id}>Reserve Rocket</button>
      </div>      
    </div>
  );
}

Rocket.propTypes = {
  rocket_id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};



export default Rocket;