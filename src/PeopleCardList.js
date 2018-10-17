import React from 'react';
import PeopleCard from './PeopleCard';

const PeopleCardList = ({ array }) => {
  return (
    <div>
      {array.map((user, i) => {
          return (
            <PeopleCard 
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

export default PeopleCardList;