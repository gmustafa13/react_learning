import React, { Component } from 'react'

class BindEventClass extends Component {
    constructor() {
        super();
        this.state = {
            msg: 'Hello'
        }
        // secound method to bind
        // this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        // to bind this event need to use js bind() method 
        // bcz this keyword is not acccebale here
        //method 1
        console.log("hhh")
        this.setState({
            msg: 'Good Bye!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.msg}</div>
             
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>   method 1 */}
                {/* <button onClick={this.clickHandler}>Click</button>  method 2 */}
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default BindEventClass