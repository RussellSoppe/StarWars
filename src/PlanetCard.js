import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';

const PlanetCard = ({ name, id, rotationp, orbitalp, diameter, climate, gravity }) => {
  // const { name, email, id } = props; can add as const or put in function as seen
  return (
    <div className='card'>
      <div>
        <h2>{name}</h2>
        <div>
          <Accordion className='accordion'>
            {[1].map(item => {
              return (
              
                <AccordionItem key={item} className="bio" title={`Info`} expanded={item === 0}>
                  <div className='accordionitem'>
                    <p>Rotation Period: {rotationp}</p>
                    <p>Orbital Period: {orbitalp}</p>
                    <p>Diameter: {diameter}</p>
                    <p>Climate: {climate}</p>
                    <p>Gravity: {gravity}</p>
                  </div>
                </AccordionItem>
             	 );
            })}
          </Accordion>
        </div>
      </div>
    </div> 
    );
}

export default PlanetCard;