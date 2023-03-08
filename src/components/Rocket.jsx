import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import style from '../styles/Rocket.module.css';

const Rocket = ({
  rocketId, image, name, description, reserved
}) => (
  <div className={style.container}>
    <img src={image} alt={name} className={style.image} />
    <div className={style.text}>
      <h3>{name}</h3>
      <p>
        {reserved && <Button>Reserved</Button>}
        {description}
      </p>
      {!reserved && <Button variant="primary" id={rocketId}>Reserve Rocket</Button>}
      {reserved && <Button variant="primary" id={rocketId}>Cancel Reservation</Button>}
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
