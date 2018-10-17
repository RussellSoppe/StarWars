import React, { Component } from 'react';
import Background from './Background';
import MenuButtons from './MenuButtons';
import Vehicles from './Vehicles';
import People from './People';
import Planets from './Planets';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     website: 'people'
    };
  }
  
 onPageChange = (page)=>{
    this.setState({website: page});
  }

  render() {
   
    return (
      <div className="App">
        <Background/>
        <MenuButtons onPageChange={this.onPageChange}/>
        {this.state.website === "people"
            ?<People />
          :(this.state.website === "vehicles"
            ?<Vehicles />
            :<Planets />
          )
          }
      </div>
    );
  }
}

export default App;
