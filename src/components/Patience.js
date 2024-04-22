import React, {useState} from 'react';

const Patience =  () => {
    const [counter, setCounter] = useState(0);
    console.log(counter)
    // const addOne = () => {
    //     setCounter(prevState => prevState + 1)
    // }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick= {()=> setCounter(prevState => prevState +1)}>Add</button>
        </div>
    )
}

export default Patience