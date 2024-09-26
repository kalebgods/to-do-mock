import React, {useState} from 'react';

function TodoList(){
  const[tasks, setTasks] = useState([])
  const[newTask, setNewTask] = useState('')

  function handleInputChange(e){
    setNewTask(e.target.value)

  }
  function addTask(){

  }
  function removeTask(){

  }
  return(
    <div className='to-do-list'>
      <h1>to Do list</h1>
      <div>
        <input
        type='text'
        placeholder='Enter a task...'
        value={newTask}
        onChange={handleInputChange}
        />
        <button className='add-button'
        onClick={addTask}>
          add task
        </button>
      </div>
    </div>
  )
}

export default TodoList;

