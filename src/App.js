
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Todo from './components/Todo';
import AddTodoForm from './components/AddToDoForm';

function App() {
  return (
    <div  id="App">
      <h1>To do List</h1>
     
      <Todo></Todo>
      <AddTodoForm></AddTodoForm>
    </div>
  );
}

export default App;
