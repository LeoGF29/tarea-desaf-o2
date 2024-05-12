import { useState } from 'react'
import MiComponente from './MiComponente'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const[tasks, setTasks] = useState([]);
  const[newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }  ;

  const handleAddTask = () => {
    if (newTask.trim() !== ''){
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
    <div className="page-container">
     <div className='centered-content'>
      <div class="card mb-3">
        <h1 class="card-header">To do list</h1>
        <input
        type="text"
        placeholder='Escribir tarea'
        value={newTask}
        onChange={handleInputChange}
        />
        <button class="btn btn-outline-light" onClick={handleAddTask}>Agregar tarea</button>
        <ul class="list-group">
          {tasks.map((task,index) => (

            <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center" key={index}>
              
              {task}
              <button class="btn btn-dark" onClick={() => handleDeleteTask(index)}>Eliminar</button>

            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
      
      
      <MiComponente />
      
    </>
  )
}

export default App
