import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({
  rocketId, image, name, description,
}) => (
  <div>
    <img src={image} alt={name} />
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button type="button" id={rocketId}>Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
