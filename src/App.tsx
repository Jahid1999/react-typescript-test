import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Navibar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import Users from './components/Users';
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { useSelector } from 'react-redux';
// import { RootState } from './state/reducers';
import { RootState } from './state-redux-toolkit/store';
import Modals from './components/Modals';
import UserManagement from './components/UserManagement';

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
  
  const state = useSelector((state: RootState) => state.tasks.tasks)

  const [showAddButton, setShowAddButton] = useState<boolean>(false) 


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
              state.length > 0 ? <Tasks /> :   
              'No Tasks Left'
            }

          </>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/management' element={<UserManagement />} />
      </Routes>
      <Modals />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
