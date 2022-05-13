import React  from "react";
import './FormInput.css'

function Forminput(props){
    const handleChange = (event) => {
        // taking name from props
        const name = props.name;
        // taking value from event
        const value = event.target.value;
        props.setInput(values => {
            // assingn value to object
            return {...values,[name]:values[name] + value}
        })
      }
    return(
        <div className="formInput">
            <label>{props.lebel} :</label>
            <input placeholder={props.placeholder} value={props.value} onChange={handleChange}/>
        </div>
    )
}

export default Forminput