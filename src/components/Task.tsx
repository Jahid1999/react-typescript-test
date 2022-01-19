import { FaTimes } from "react-icons/fa";
import {taskInterfaceWithID} from '../App'
import { useDispatch } from 'react-redux';

import {actionTask} from '../state-redux-toolkit/features/taskSlice'
import React from "react";
import {StaticData} from './TaskModal'

interface Props {
  task: taskInterfaceWithID,
  // onDelete : (id : number) => void;
  // onToggle : (id : number) => void;
}


const Task:React.FC<Props> =({task}) => {
  // const [show, setShow] = useState(false);
  // const [modalKey, setModalKey] = useState(Date.now() + '')

  const dispatch = useDispatch();

  // const handleClose = () => {
  //   setShow(false);
  //   setModalKey(Date.now() + '')
  // }

  const handleShow = () => {
    StaticData.selectedTask.task = task
    // StaticData.update(task)
    console.log(task);
    
    dispatch(actionTask.handleShowTask())
  };
    return (
      <>  
        <div className={`task ${task.reminder? 'reminder' : ''}`} onDoubleClick={ () => {dispatch(actionTask.toggleTask(task.id))}} onClick={handleShow} >
          <h3> {task.text} <FaTimes style={{color:'red', cursor:'pointer'}} 
          onClick={() => {dispatch(actionTask.deleteTask(task.id))}} /></h3>
          <p> {task.date}</p>   
        </div>    
      </>
     
    );
  }

export default React.memo(Task);