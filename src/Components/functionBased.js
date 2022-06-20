import React from "react";

const FunctionBased = (props) => {
  const { name, age, email } = props;
  return (
    <div>
      My Name is {name} i am {age} year old , You can reach out to me on
      <strong> `{email}`</strong>
    </div>
  );
};

export default FunctionBased;
