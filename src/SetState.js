import React , {useState}from 'react';
import ReactDOM from 'react-dom';
function SetState(){
    const [emotion , setEmotion] = useState('Happy')
    return(
        <>
        <h1>
            Current emotion is {emotion}    
        </h1>
        <button onClick={()=> setEmotion("Angry")}>Angry</button>
        <button onClick={()=> setEmotion("Happy")}>Happy</button>
        </>
    )
}
export default SetState