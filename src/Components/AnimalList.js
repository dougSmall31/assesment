import React, {Component} from 'react'
import axios from 'axios'

const AnimalList = (props) => {
    return (
        <div>
            <div>
            <h2>Animals</h2>
            </div>
            {props.animals.map(animal =>(
            <div>    
                <div>Name: {animal.name}</div>
                <img src={animal.imageURL} alt='' />
            </div>
            ))}
        </div>
    )
}
export default AnimalList