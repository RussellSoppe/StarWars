import React from 'react';
import Card from './Card';

const Cardlist = ({ array }) => {
  return (
    <div>
      {array.map((user, i) => {
          return (
            <Card 
            key={i} 
            id={i}
            name={user.name} 
            bday={user.birth_year}
            height={user.height}
            eyecolor={user.eye_color}
            />
          );
        }
      )}
    </div>
  );
}

export default Cardlist;