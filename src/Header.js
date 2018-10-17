import React from 'react';

const Header = (props) => {
  return (
    <div className='header'>
    {/*<img 
      src="https://vignette.wikia.nocookie.net/disney/images/2/21/Star_Wars_logo.png/revision/latest?cb=20170909202326" 
      alt="Star_Wars_logo" 
    >
    </img>*/}
    <div>
    {props.headername}
    </div>
    </div>
  );
}

export default Header;