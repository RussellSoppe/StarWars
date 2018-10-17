import React from 'react';
// import './css/WebsiteMenu.css';

const MenuButtons = (props)=>{
	return(

     	<div className="websitebuttonbanner">
     	<img 
      src="https://vignette.wikia.nocookie.net/disney/images/2/21/Star_Wars_logo.png/revision/latest?cb=20170909202326" 
      alt="Star_Wars_logo" 
    	>
    	</img>
               <div className="websitebuttongroup">
                    <button onClick={()=> props.onPageChange('people')} className="websitebutton">People</button>
                    <button onClick={()=> props.onPageChange('vehicles')} className="websitebutton">Vehicles</button>
                    <button onClick={()=> props.onPageChange('planets')} className="websitebutton">Planets</button>
               </div>
          </div>
	);
}

export default MenuButtons;