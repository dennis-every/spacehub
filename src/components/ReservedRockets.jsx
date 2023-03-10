import React from 'react';
import { useAppSelector } from '../redux/redux-hooks';

const ReservedRockets = () => {
  const { rockets } = useAppSelector((state) => state.rockets);
  const reserved = rockets.filter((rocket) => rocket.reserved === true);
  console.log(reserved);
  return (
    <>
      <h3>My Rockets</h3>
      <ul className="list-group">
        {
          reserved.map((rocket) => (
            <li key={rocket.rocketId} className="list-group-item">{rocket.name}</li>
          ))
        }
      </ul>
    </>
  );
};

export default ReservedRockets;
