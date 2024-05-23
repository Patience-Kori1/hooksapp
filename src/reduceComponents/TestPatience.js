import React from 'react';
import { useReducer } from "react";

const CountBis = () => {

    const initialState = { count: 0 };

    const reducer = (state, action) => {
        return { count: state.count + 1 };
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="CountReducer">
            <p>{state.count}</p>
            <button className="btn btn-success m-3" onClick={() => dispatch()}>+</button>
        </div>
    )
}

export default CountBis;
