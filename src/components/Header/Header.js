import React, {useState} from 'react';

const Header = ({data, setData}) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value)
  };
  const handleSaveTask = () => {
    if(task.trim() !== ''){
      const newTask = {
        id: Math.random(), 
        text: task,
        deleted: false
      }
      setData([...data, newTask])
      setTask('');
    }
  }
  return(
    <div className = 'header'>
      <input type = 'text' value = {task} onChange = {handleTaskChange} />
      <button className='circle-btn' onClick = {handleSaveTask}>+</button>
    </div>
  )
}

export default Header;