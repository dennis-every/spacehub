import React from 'react';
import { useAppSelector } from '../redux/redux-hooks';
import Rocket from './Rocket';

const RocketsContainer = () => {
  const { rockets } = useAppSelector((state) => state.rockets);
  return (
    <div>
      {rockets.map((item) => (
        <Rocket
          key={item.rocketId}
          rocketId={item.rocketId}
          image={item.image}
          name={item.name}
          description={item.description}
          reserved={item.reserved}
        />
      ))}

    </div>
  );
};

export default RocketsContainer;
