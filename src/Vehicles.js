import React, { Component } from 'react';
import Header from './Header'
import Cardlist from './Cardlist';


const PagesBttn = (props) => {
   return (
    <div className='pages'>
      <h3>Pages</h3>
      <div className='pagebuttons'>
        <button onClick={() => props.page(0)}>1</button>
        <button onClick={() => props.page(1)}>2</button>
        <button onClick={() => props.page(2)}>3</button>
        <button onClick={() => props.page(3)}>4</button>
     </div>
    </div>
  );
}

class Vehicles extends Component {
  constructor(props){
    super(props);
    this.state = {
      vehicles: [],
      vehicles2: [],
      vehicles3:[]
    };
  }
  
componentDidMount(){
    const urls = [
    'https://swapi.co/api/vehicles/',
    'https://swapi.co/api/vehicles/?page=2',
    'https://swapi.co/api/vehicles/?page=3',
    'https://swapi.co/api/vehicles/?page=4'
    
    ];
    Promise.all(urls.map(url => 
      fetch(url) 
        .then(response => response.json())
        ))
        .then(array => {
          this.setState ({
            vehicles: array[0].results,
            vehicles2: array,
          })

        })
        .catch(error => console.log('failed', error))
  }
  
pageChange (i) {
  this.setState ({vehicles: this.state.vehicles2[i].results});
  }

  render() {
    let changeMe = this.state.vehicles;

    return (
      <div className="App">
       <div>
        <Header headername={"Vehicles of Star Wars"}/>
          <div>
            <Cardlist array = {changeMe}/>
          </div>
          <PagesBttn page={(i) => this.pageChange(i)}/>
      </div>
      </div>
    );
  }
}

export default Vehicles;