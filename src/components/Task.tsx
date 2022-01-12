import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import Modal from './Modal'
import {taskInterfaceWithID} from '../App'

interface Props {
  task: taskInterfaceWithID,
  onDelete : (id : number) => void;
  onToggle : (id : number) => void;
}
const Task:React.FC<Props> =({task, onDelete, onToggle}) => {
  const [show, setShow] = useState(false);
  const [modalKey, setModalKey] = useState(Date.now() + '')

  const handleClose = () => {
    setShow(false);
    setModalKey(Date.now() + '')
    console.log('eije ami--' + show );
  }
  const handleShow = () => setShow(true);
    return (
      <>  
       <div className={`task ${task.reminder? 'reminder' : ''}`} onDoubleClick={ () => {onToggle(task.id)}} onClick={handleShow} >
          <h3> {task.text} <FaTimes style={{color:'red', cursor:'pointer'}} 
          onClick={() => {onDelete(task.id)}} /></h3>
          <p> {task.date}</p>
          
      </div>
      <Modal key={modalKey} show={show} onHide={handleClose}/>
      </>
     
    );
  }

export default Task;