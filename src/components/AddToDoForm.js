import React, {useState} from 'react';

const AddTodoForm = () => {
    return (
        <form className="mt-4">
            <div className="card card-body">
                <div className="form-group" id="formTodo">
                <label> Ajouter Todo </label>
                
                <input className ="form-control" id ="ajoouterToD" type="text"></input> 
                <input className ="btn btn-success mt-4" type = "submit"></input>
                </div>
                
            </div>
        </form>
        
    )
}
export default AddTodoForm; 