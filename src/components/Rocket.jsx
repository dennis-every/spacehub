import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import style from '../styles/Rocket.module.css';

const Rocket = ({
  rocketId, image, name, description,
}) => (
  <div className={style.container}>
    <img src={image} alt={name} className={style.image} />
    <div className={style.text}>
      <h3>{name}</h3>
      <p>{description}</p>
      <Button variant="primary" id={rocketId}>Reserve Rocket</Button>
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
