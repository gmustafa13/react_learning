import React from "react";

/**
 * props is passed in the comp.     || state is in the comp
 * props passed as fun. parameter  || state is variable
 * child comp cant changes props || child can chnage value using state
 * in func. comp u can use any parameter  || useSate hooks for using state
 * in class comp use this.props  || use this.state in class comp
 */
const EventHandler = () => {
 const clickHandler = ()=>{
    console.log("clicked");
  }
  return (<div>
    <button onClick={clickHandler}>Click Me</button>
  </div>);
};

export default EventHandler;
