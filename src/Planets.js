import React, { Component } from 'react';
import Header from './Header';
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
        <button onClick={() => props.page(4)}>5</button>
        <button onClick={() => props.page(5)}>6</button>
        <button onClick={() => props.page(6)}>7</button>
      </div>
    </div>
  );
}

class Planets extends Component {
  constructor(props){
    super(props);
    this.state = {
      planets: [],
      planets2: [],
      planets3:[]
    };
  }
  
componentDidMount(){
    const urls = [
    'https://swapi.co/api/planets/',
    'https://swapi.co/api/planets/?page=2',
    'https://swapi.co/api/planets/?page=3',
    'https://swapi.co/api/planets/?page=4',
    'https://swapi.co/api/planets/?page=5',
    'https://swapi.co/api/planets/?page=6',
    'https://swapi.co/api/planets/?page=7'
    
    ];
    Promise.all(urls.map(url => 
      fetch(url) 
        .then(response => response.json())
        ))
        .then(array => {
          this.setState ({
            planets: array[0].results,
            planets2: array,
          })

        })
        .catch(error => console.log('failed', error))
  }
  
 

 pageChange (i) {
  this.setState ({planets: this.state.planets2[i].results});
  }

  render() {
    let changeMe = this.state.planets;

    return (
      <div className="App">
       <div>
        <Header headername={"Planets of Star Wars"}/>
          <div>
            <Cardlist array = {changeMe}/>
          </div>
          <PagesBttn page={(i) => this.pageChange(i)}/>
      </div>
      </div>
    );
  }
}

export default Planets;
