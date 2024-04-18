import React, {useState} from 'react';

const AddTodoForm = ({addNewTodo}) => {

    const [ addTodo, setAddTodo ] = useState('')
    console.log(addTodo);

    const handleTodo = (e) => {
        e.preventDefault()
        addNewTodo (addTodo); 
        setAddTodo (''); //  reset the input field to empty after submitting form
         // e.target.reset(); // on peut aussi faire le resert de input à zéro après la soumission de la valeur mais c'est si jamais on a enlevé {addTodo} dans le paramètre de input. Par contre si on le renvoie, il renvoie le dernier state 

    }

    return (
        <form className="mt-4" onSubmit={handleTodo}>
            <div className="card card-body">
                <div className="form-group" id="formTodo">
                <label> Ajouter Todo </label>
                
                <input className="form-control" type="text"value={addTodo} onChange={(e) => setAddTodo(e.target.value)}></input> 
                <input className="btn btn-success mt-4" type = "submit"></input>
                </div>
            </div>
        </form>
        
    )
}
export default AddTodoForm; 
