import React from 'react';
import Rocket from './Rocket';
import { useSelector } from 'react-redux';

const RocketsContainer = () => {
  const { rockets } = useSelector((state)=>state.rockets);
  return (
    <div>
      {rockets.map((item)=>(
        <Rocket
          key={rockets.rocket_id}
          rocket_id={rockets.rocket_id}
          image={rockets.image}
          name={rockets.name}
          description={rockets.description}        
        />
      ))}

    </div>
  )
}

export default RocketsContainer;