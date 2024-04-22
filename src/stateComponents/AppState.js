import './App.css';
import ClassState from './componentsBis/ClassState';
import FunctionState from './componentsBis/FunctionState';
import {v4 as uuidv4} from 'uuid';

function App() {
  return (
    <div className="App">
      <h1 className ="text-center"> Use state </h1>
      <ClassState></ClassState>
      <hr/>
      <FunctionState></FunctionState>

    </div>
  );
}
