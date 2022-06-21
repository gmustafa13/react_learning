import reatc from "react";

const ChildComponents = (props) => {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> // normal call */}
      {/* //passing parameter in func. */}
      <button onClick={()=> props.greetHandler('child')}>Greet Parent</button> 
    </div>
  );
};

export default ChildComponents;
