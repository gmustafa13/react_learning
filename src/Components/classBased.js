import React, { Component } from "react";

class ClassBased extends Component {
  render() {
    return (
      <div>
        My Name is {this.props.name} i am {this.props.age} year old , You can
        reach out to me on
        <strong> `{this.props.email}`</strong>
      </div>
    );
  }
}

export default ClassBased;
