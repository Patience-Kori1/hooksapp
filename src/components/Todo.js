import React, {useState} from 'react';
import AddTodoForm from './AddToDoForm';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
    const [todos, setTodo] = useState([
        {id: 1, todo : "Voler des avocats"},
        {id: 2, todo : "Aller boire en verre avec les Dev Web"},
        {id: 3, todo : "Avancer sur le projet"}
    ])
   
    const myTodos  = todos.map((todo) => 
    {return (<li key={todo.id} class="list-group-item"> {todo.id} . {todo.todo} </li>)})

    console.log(myTodos);
    console.log(myTodos.todo);

    const addNewTodo = (newTodo) => {

        if(newTodo !== '') {

        warning && setWarning(false)

        const newid = uuidv4();
        setTodo([... todos, {
            id: newid ,
            todo: newTodo
        }])
    }   else{
        setWarning(true);
    }
    }

    const [warning, setWarning] = useState(false);

    const warningMsg = warning && <div className = "alert alert-danger" role="alert"> Veuillez indiquer un Todo </div>

    return (
        <div >  
                {warningMsg}
                <h2>{todos.length} To-do </h2>
                <ul class="list-group" id="listTodo">
                    {myTodos}
                </ul>
                <AddTodoForm addNewTodo={addNewTodo}></AddTodoForm>
            
        </div>
    )
}
export default Todo


  
  
