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
        <button onClick={() => props.page(7)}>8</button>
        <button onClick={() => props.page(8)}>9</button>
      </div>
    </div>
  );
}

class People extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [],
      people2: [],
      people3:[]
    };
  }
  
componentDidMount(){
    const urls = [
    'https://swapi.co/api/people/',
    'https://swapi.co/api/people/?page=2',
    'https://swapi.co/api/people/?page=3',
    'https://swapi.co/api/people/?page=4',
    'https://swapi.co/api/people/?page=5',
    'https://swapi.co/api/people/?page=6',
    'https://swapi.co/api/people/?page=7',
    'https://swapi.co/api/people/?page=8',
    'https://swapi.co/api/people/?page=9'
    ];
    Promise.all(urls.map(url => 
      fetch(url) 
        .then(response => response.json())
        ))
        .then(array => {
          this.setState ({
            people: array[0].results,
            people2: array,
          })

        })
        .catch(error => console.log('failed', error))
  }
  
 

 pageChange (i) {
  this.setState ({people: this.state.people2[i].results});
  }

  render() {
    let changeMe = this.state.people;

    return (
      <div className="App">
       <div>
        <Header headername={"People of Star Wars"}/>
          <div>
            <Cardlist array = {changeMe}/>
          </div>
          <PagesBttn page={(i) => this.pageChange(i)}/>
      </div>
      </div>
    );
  }
}

export default People;
