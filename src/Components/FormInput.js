import React  from "react";
import './FormInput.css'

function Forminput(props){    
    return(
        <div className="formInput">
            <label>{props.lebel} :</label>
            <input placeholder={props.placeholder} name={props.name} value={props.value} type={props.type} onChange={props.onChange}/>
        </div>
    )
}

export default Forminput