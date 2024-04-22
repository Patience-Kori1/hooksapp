
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Todo from './components/Todo';
import AddTodoForm from './components/AddToDoForm';
import ClassCount from './components/ClassCount';

function App() {
  return (
    <div  id="App">
      <h1>CDM</h1>
     
      <ClassCount></ClassCount>
      
    </div>
  );
}

export default App;
