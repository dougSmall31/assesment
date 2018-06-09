import React, {Component} from 'react'
import axios from 'axios'

const AnimalList = (props) => {
    return (
        <div>
            <div className='title'>
            <h2>Animals</h2>
            </div>
            {props.animals.map(animal =>(//add key?
            <div>    
                <div>Name: {animal.name}</div>
                {/* <div>{animal.id}</div> */}
                <img className='images' src={animal.imageUrl || animal.imgUrl} alt='' />
                
            </div>
            ))}
        </div>
    )
}
export default AnimalList