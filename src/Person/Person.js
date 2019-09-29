import React ,{component} from 'react';
import '../index.css'
const person = (props)=>{
    return (
        <div className="Person">
            <h1>Hello {props.name}.</h1>
            <p>Age : {props.age}</p>
            <input type="button" onClick={props.delete}  value="Delete"/>
            <br/><br/>
            <input type="text" onChange={props.change }/>
        </div>
    )
};

export default person;