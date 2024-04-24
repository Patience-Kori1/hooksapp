import React, { Component } from 'react';
import './App.css';
import Profile from './contextComponents/Profile';
import { UserContext, ColorContext } from './contextComponents/MyContext';
import Patience from './contextComponents/Patience';

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

      <h1> App </h1>
      {/* <Patience></Patience> */}
        <UserContext.Provider value={this.state.user}>
          <ColorContext.Provider value="red" >
            <Profile> </Profile>
          </ColorContext.Provider>
        </UserContext.Provider>
       
         
    </div>
    )
  }
}

export default App

