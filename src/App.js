import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import AnimalList from './Components/AnimalList'

const BASE_URL = 'http://localhost:4000'

class App extends Component {
  constructor(){
    super();
    this.state = {
      animalList : []
    }
  }
  componentDidMount(){
    axios({
      method: 'GET',
      url: BASE_URL + '/api/animals'
    }).then(response => {
      this.setState({animalList: response.data})
    })
    console.log('component did mount')
    console.log(this.state.animalList);
    
  }

  render() {
    return (
      <div className="App">
      <div>
        
        <div>
          <input/>
          <input/>
        </div>
        <div>
          <button>Add New</button>
        </div>
      </div>
      
      <div>
        <AnimalList animals={this.state.animalList}/>
      </div>
        
      </div>
    );
  }
}

export default App;
