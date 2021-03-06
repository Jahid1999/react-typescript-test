import React from "react";
import { useState } from "react";

import { useDispatch } from 'react-redux';

import {actionTask} from '../state-redux-toolkit/features/taskSlice'

const AddTask:React.FC = () => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const dispatch = useDispatch();

  const onSubmit = (e : any) => {
    e.preventDefault()

    dispatch(actionTask.addTask({text, date, reminder}));

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
              <input type='date' placeholder="Add Date" value={date} onChange={(e) => { setDate(e.target.value)}} />
          </div>
          <div className="form-control form-control-check">
              <label>Reminder</label>
              <input type='checkbox' checked={reminder} onChange={(e) => { setReminder(e.currentTarget.checked)}} />
          </div>

          <input type='submit' style={{backgroundColor : 'black', color: 'white'}} className="btn btn-block" value='Save' />
      </form>
    );
  }

export default React.memo(AddTask) ;