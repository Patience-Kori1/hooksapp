import React, {Component} from 'react';


class ClassState extends Component { 
        state = {
            counter: 0
        }
    // addOne = () => {
    //     this.setState((prevState)  => {
    //         return {
    //         counter: prevState.counter  + 1
    //         }
    //         })
    // }

    
    render() {
        return (
            <div>
                <p> Class State: {this.state.counter} </p>
                <button onClick = {() => { this.setState ({counter: this.state.counter +1 })}} > State dans une classe </button> <br></br> 
                 {/* {alert(this.state.counter)}           */}
            </div>
        )
    }
}
export default ClassState

