import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import style from '../styles/Rocket.module.css';
import { setReserved } from '../redux/rockets/rocketsSlice';

const Rocket = ({
  rocketId, image, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  const handler = (elem) => {
    dispatch(setReserved(elem.id));
  };

  return (
    <div className={style.container}>
      <img src={image} alt={name} className={style.image} />
      <div className={style.text}>
        <h3>{name}</h3>
        <p>
          {reserved && <Button>Reserved</Button>}
          {description}
        </p>
        {!reserved && <Button variant="primary" id={rocketId} onClick={({ target }) => handler(target)}>Reserve Rocket</Button>}
        {reserved && <Button variant="primary" id={rocketId}>Cancel Reservation</Button>}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
