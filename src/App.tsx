import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Navibar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

export interface taskInterface  {
  text: string,
  date: string,
  reminder: boolean,
}
export interface taskInterfaceWithID {
  id: number,
  text: string,
  date: string,
  reminder: boolean,
}

function App() {
  const [showAddButton, setShowAddButton] = useState<boolean>(false)
  const [tasks, setTasks] = useState<taskInterfaceWithID[]>([
    {
        id:1,
        text:'Task 1',
        date: '03-01-2022',
        reminder: true,
    },
    {
        id:2,
        text:'Task 2',
        date: '03-01-2022',
        reminder: true,
    },
    {
        id:3,
        text:'Task 3',
        date: '03-01-2022',
        reminder: false,
    },
])

//Delete Task
const deleteTask = (id : number) => {
//  console.log(id);
    setTasks(tasks.filter((task) => task.id !== id))
} 

//Toggle Reminder
const toggleReminder = (id : number) => {
  //  console.log(id);
  setTasks(tasks.map((task) => task.id ==id ? {...task, reminder: !task.reminder} : task))
  } 


// Add Task
function addTask(task : taskInterface) : void {
  console.log(task)
  let id : number = Math.ceil(Math.random() * 1000) + 1;

  const newTask = {id, ...task}
  setTasks([...tasks, newTask]);
}

  return (
    <Router>
      <Navibar />
      <div className="container">
      <Header onAddClick={() => setShowAddButton(!showAddButton)} showAdd = {showAddButton} />
    
      <Routes>
        <Route path='/' element= {
          <>
             {
              showAddButton && <AddTask onAdd={addTask} />
             }
            
            {
              tasks.length > 0 ? <Tasks  tasks={tasks} onDelete = {deleteTask}  onToggle = {toggleReminder} /> :   
              'No Tasks Left'
            }

          </>
        } />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
