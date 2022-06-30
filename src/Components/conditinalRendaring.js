import react, { Component } from 'react';

class ConditionalRendaring extends Component {
    constructor() {
        super()
        this.state = {
            isLogIn: false
        }
    }
    changeContent = ()=>{
        // this.state = {
        //     isLogIn:false
        // }
        this.setState({isLogIn:true})
    }

    render() {
        return (

            <div>
                {this.state.isLogIn ? <div    >Wellcome Gulam </div> : <div>Wellcome Gulam Mustafa</div>}
                <div>
                    <button onClick={this.changeContent}>Click</button>
                </div>
            </div>
        )
    }
}

export default ConditionalRendaring