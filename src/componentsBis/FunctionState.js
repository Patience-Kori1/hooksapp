import React, {useState} from 'react';

const FunctionState = () => {
    const [counter, setCounter] = useState(0);
    console.log(counter)


    return (
        <div>
            <p> Function State: {counter}</p>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1 )}> State dans une fonction </button>
            
        </div>
    )
}
export default FunctionState