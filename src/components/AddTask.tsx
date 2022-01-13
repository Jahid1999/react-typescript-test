import { useState } from "react";

import { taskInterface } from '../App'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import  {actionCreators}  from '../state';

// interface Props {
//   onAdd: (task: taskInterface) => void;
// }
const AddTask:React.FC = () => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const dispatch = useDispatch();

  const {addTask } = bindActionCreators(actionCreators, dispatch)

  const onSubmit = (e : any) => {
    e.preventDefault()

    addTask({text, date, reminder});

    setText('')
    setDate('')
    setReminder(false)
  }
    return (
      <form className='add-form' onSubmit={onSubmit}>
          <div className="form-control">
              <label>Task</label>
              <input type='text' placeholder="Add Task" value={text} onChange={(e) => { setText(e.target.value)}} />
          </div>
          <div className="form-control">
              <label>Date</label>
              <input type='text' placeholder="Add Date" value={date} onChange={(e) => { setDate(e.target.value)}} />
          </div>
          <div className="form-control form-control-check">
              <label>Reminder</label>
              <input type='checkbox' checked={reminder} onChange={(e) => { setReminder(e.currentTarget.checked)}} />
          </div>

          <input type='submit' style={{backgroundColor : 'black', color: 'white'}} className="btn btn-block" value='Save' />
      </form>
    );
  }

export default AddTask;