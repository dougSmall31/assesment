import React, {Component} from 'react'
import axios from 'axios'


class AddAnimal extends Component {
    constructor(){
        super()

        this.state = {
            animalInput: {
                nameInput: '',
                imgInput : ''
            } 
        }
    }

    

    handleNameChange=( value )=>{
        this.setState({nameInput: value})
        console.log(this.state.nameInput,'handleNameChange');
        
    }
    handleImgChange=( value )=>{
        this.setState({ imgInput: value})
        console.log(this.state.imgInput,'handleimgChange');
        
    }

    handleAdd = (event)=> {
        this.props.add(this.state.animalInput)
        this.setState({animalInput:{nameInput:'',imgInput:''}})
        console.log(this.state.animalInput,'handleAdd');
            
    }
    
    // handleRemove = (event) => {
    //     this.props.handleRemove(this.state.animalInput)
    // }

    render() {
        return(
            <div className='addAnimal'>
            <div>
                <div>
                    <input name={this.state.animalInput.nameInput}
                            placeholder="Animal Name"
                            onChange={ (e) =>this.handleNameChange( e.target.value )}
                    />
                    <input img={this.state.animalInput.imgInput}
                            placeholder="Image URL"
                            onChange={ (e) =>this.handleImgChange( e.target.value )}
                    />
                </div>
                <div>
                    <button onClick={this.handleAdd}>Add New</button>
                </div>
                {/* <div>
                    <button onClick={this.handleAdd}>Remove Last</button>
                </div> */}
            </div>
            </div>
        )
    }
}
export default AddAnimal