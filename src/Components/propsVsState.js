import { Component } from "react";
import React from "react";

/**
 * props is passed in the comp.     || state is in the comp
 * props passed as fun. parameter  || state is variable
 * child comp cant changes props || child can chnage value using state
 * in func. comp u can use any parameter  || useSate hooks for using state
 * in class comp use this.props  || use this.state in class comp
 */

// calss based state

class DemoForSate extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Visitor",
      count: 0,
    };
  }
  changeMsg() {
    // setSate have two parameter 1. object/function 2. callback
    this.setState(
      {
        msg: "Thank you for clicking",
      },
      () => {}
    );
  }

  changeCount() {
    // if value depends on previous state then use this syntax
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }), ()=>{
        console.log("count", this.state.count)
    });
  }
  render() {
    return (
      <div>
        Wellcome {this.state.msg} and count is {this.state.count}
        <button onClick={() => this.changeMsg()}>Subscribe</button>
        <button onClick={() => this.changeCount()}>Change Count</button>
      </div>
    );
  }
}

export default DemoForSate;
