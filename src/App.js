import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import AnimalList from './Components/AnimalList'
import AddAnimal from './Components/AddAnimal';

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

  addAnimalHandler = (inputObj) => {
    axios({
      method: 'POST',
      url: BASE_URL +'/api/animals',
      data: { name1: inputObj.nameInput,
              imgUrl1: inputObj.imgInput
            }
    }).then(response => {
      this.setState({animalList: response.data})
    })
    console.log('addAnimalHandler POST', this.state.animalList);
    
  }

  //saveHandler() update state and referenct two input fields

  render() {
    return (
      <div className="App">   
      <div>
        <AddAnimal add={this.addAnimalHandler}/>
      </div>  
      <div>
        <AnimalList animals={this.state.animalList}/>
      </div>
        
      </div>
    );
  }
}

export default App;
