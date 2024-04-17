import React, {useState} from 'react';

const Todo = () => {
    const [todos, setTodo] = useState([
        {id: 1, todo : "Voler des avocats"},
        {id: 2, todo : "Aller boire en verre avec les Dev Web"},
        {id: 3, todo : "Avancer sur le projet"}
    ])
   
    const myTodos  = todos.map((todo) => 
    {return (<li key={todo.id} class="list-group-item"> {todo.id} . {todo.todo} </li>)})

    console.log(myTodos);
    return (
        <div >  
                <h2>{todos.length} To-do </h2>
                <ul class="list-group" id="listTodo">
                    {myTodos}
                </ul>
            
        </div>
    )
}
export default Todo