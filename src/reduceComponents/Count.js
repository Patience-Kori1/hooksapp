import React from 'react';
import {useReducer} from "react";

const Count = () => {

    const initialState = 0
    const reducer = (state, action) => {
        switch(action){
        case 'increment': 
            return state +1;
        case 'decrement':  
            return state -1;
        case 'réinitialisation':
            return initialState;
        }
        
        
    }
    
    const [count, dispatch] = useReducer(reducer, initialState);
   
    return(
        <div classname= "CountReducer">
            <p> {count}</p>
            <button className= "btn btn-success m-3" onClick={()=> dispatch("increment")}>+</button>
            <button className= "btn btn-danger m-3" onClick={()=> dispatch("réinitialisation")}>0</button>
            <button className= "btn btn-danger m-3" onClick={()=> dispatch("decrement")}>-</button>
        </div>
    )
}

export default Count