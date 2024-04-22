import React, { Component } from 'react'

export class ClassCount extends Component {

    state  = {
        counter: 0
    }

    // newCounter = () => {
    //     this.setState({counter : this.state.counter + 1})
    // }

    componentDidMount() {
        document.title = "Vous avez cliqué ${this.state.counter} fois"
        console.log("je suis dans le  didmount")
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = "Vous avez cliqué ${this.state.counter} fois"
        console.log("Je suis dans DidUpdate")
    }

  render() {
    return (
      <div>
        <h1> Mon compteur : {this.state.counter} </h1>
        <button onClick= {() => this.setState((prevState) => ({counter: prevState.counter + 1}))}> Changer compteur </button> 
        <p> Mon nouveau compteur : {this.state.counter}</p>
      </div>
    )
  }
}

export default ClassCount

