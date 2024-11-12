import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import DeadlineBox from './components/DeadlineBox'
import Tasks from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)
  const [taskName, setTaskName] = useState('');
  const [taskCategory, setTaskCategory] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    let taskname = event.target.taskname.value;
    setTaskName(taskName);
    let taskcategory = event.target.taskcategory.value;
    setTaskCategory(taskCategory)
}

  return (
    <section className='containe mx-auto w-11/12'>
      <Header></Header>
      <DeadlineBox></DeadlineBox>
      <TaskForm handleSubmit={handleSubmit}></TaskForm>
     
      <Tasks taskname={taskName} taskcategory={taskCategory}></Tasks>
    </section>
  )
}

export default App
