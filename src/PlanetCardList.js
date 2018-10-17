import React from 'react';
import PlanetCard from './PlanetCard';

const PlanetCardList = ({ array }) => {
  return (
    <div>
      {array.map((user, i) => {
          return (
            <PlanetCard 
            key={i} 
            id={i}
            name={user.name}
            rotationp={user.rotation_period} 
            orbitalp={user.orbital_period}
            diameter={user.diameter}
            climate={user.climate}
            gravity={user.gravity}
            />
          );
        }
      )}
    </div>
  );
}

export default PlanetCardList;