import React from 'react';
import VehicleCard from './VehicleCard';

const VehicleCardList = ({ array }) => {
  return (
    <div>
      {array.map((user, i) => {
          return (
            <VehicleCard 
            key={i} 
            id={i}
            name={user.name} 
            model={user.model}
            crewsize={user.crew}
            vehicleclass={user.vehicle_class}
            />
          );
        }
      )}
    </div>
  );
}

export default VehicleCardList;