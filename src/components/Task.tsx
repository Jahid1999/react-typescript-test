import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import Modal from './Modal'
import {taskInterfaceWithID} from '../App'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import  {actionCreators}  from '../state';

interface Props {
  task: taskInterfaceWithID,
  // onDelete : (id : number) => void;
  onToggle : (id : number) => void;
}
const Task:React.FC<Props> =({task, onToggle}) => {
  const [show, setShow] = useState(false);
  const [modalKey, setModalKey] = useState(Date.now() + '')

  const dispatch = useDispatch();

  const {deleteTask } = bindActionCreators(actionCreators, dispatch)

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
          onClick={() => {deleteTask(task.id)}} /></h3>
          <p> {task.date}</p>
          
      </div>
      <Modal key={modalKey} show={show} onHide={handleClose}/>
      </>
     
    );
  }

export default Task;