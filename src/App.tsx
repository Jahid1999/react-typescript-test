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

import { useSelector } from 'react-redux';
import { RootState } from './state/reducers';

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
  
  const state = useSelector((state: RootState) => state.task.tasks)

  const [showAddButton, setShowAddButton] = useState<boolean>(false)
  const [tasks, setTasks] = useState<taskInterfaceWithID[]>(state)


  //Toggle Reminder
  const toggleReminder = (id : number) => {
    setTasks(tasks.map((task) => task.id ==id ? {...task, reminder: !task.reminder} : task))
  } 


  return (
    <Router>
      <Navibar />
      <div className="container">
      <Header onAddClick={() => setShowAddButton(!showAddButton)} showAdd = {showAddButton} />
    
      <Routes>
        <Route path='/' element= {
          <>
             { showAddButton && <AddTask /> }
            
            {
              state.length > 0 ? <Tasks onToggle = {toggleReminder} /> :   
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
