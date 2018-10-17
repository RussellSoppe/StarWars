import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';

const PeopleCard = ({ name, id, bday, height, eyecolor }) => {
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
                    <p>Birthday: {bday}</p>
                    <p>Height: {height}</p>
                    <p>Eye Color: {eyecolor}</p>
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

export default PeopleCard;