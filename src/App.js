// import React, { Component } from 'react';
import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';
import Count from './components/Count';

function  App() { 
  const [countOne, setCountOne] = useState ({ value: 0, btnColor: 'success', increment:25});
  const [countTwo, setCountTwo] = useState ({ value: 0, btnColor: 'danger', increment:20});

  const incrementCountOne = () => {
    countOne.value < 100 && setCountOne ({...countOne, value: countOne.value + countOne.increment })
  }
  const incrementCountTwo = () => {
    countTwo.value < 100 && setCountTwo ({...countTwo, value: countTwo.value + countTwo.increment })
  }

    return (
      <div  id="App"style = {{backgroundColor: ' rgb(248, 225, 186)', width: '800px', margin:'5px auto', padding:'10px', marginTop: '50px', }}>

      <h1> Test </h1>
      <Count count={countOne.value} bgColor={countOne.btnColor}></Count>
      <Count count={countTwo.value} bgColor={countTwo.btnColor}></Count>
      <Button handleClick= {incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}> Count 1 </Button>
      <Button handleClick= {incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}> Count 2 </Button>

      
    </div>
    )
  }


export default App

