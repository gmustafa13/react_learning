import React, { Component } from 'react'

class BindEventClass extends Component {
    constructor() {
        super();
        this.state = {
            msg: 'Hello'
        }
    }
    clickHandler() {
        console.log("hhh")
    }
    render() {
        return (
            <div>
                <div>{this.state.msg}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default BindEventClass