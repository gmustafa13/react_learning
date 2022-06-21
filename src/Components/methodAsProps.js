import { Component } from "react";
import React from "react";
import ChildComponents from "./childComp";

class MethodAsProps extends Component {
  constructor() {
    super();
    this.state = {
      parentName: "fromParent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(child) {
    // this.setState = {
    //   parentName: "Thank you!",
    // };
    alert(`Hi Thank You for Every Thing! ${child}`)
  }
  render() {
    return (
      <div>
        <ChildComponents  greetHandler={this.greetParent}/>
      </div>
    );
  }
}

export default MethodAsProps;
