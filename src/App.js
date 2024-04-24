import React, { Component } from 'react';
import './App.css';
import Count from './components/Count';
import CountBis from './components/TestPatience';

export class App extends Component {
  state = {
    user : {
      name: "Lisa",
      age: 32,
  }
  
  }
  render() {
    return (
      <div  id="App"style = {{backgroundColor: ' rgb(248, 225, 186)', width: '800px', margin:'5px auto', padding:'10px', marginTop: '50px'}}>

      <h1> Test </h1>
        <Count> </Count>
        <CountBis ></CountBis>
       
         
    </div>
    )
  }
}

export default App

