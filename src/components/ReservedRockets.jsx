import React from 'react';
import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reserved = rockets.filter((rocket) => rocket.reserved === true);
  console.log(reserved);
  return (
    <div>ReservedRockets</div>
  );
};

export default ReservedRockets;
