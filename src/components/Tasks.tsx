import Task from './Task'
// import { RootState } from '../state/reducers';
import { useSelectorTyped } from '../state-redux-toolkit/store';
import React from 'react';
import { shallowEqual } from 'react-redux';

// interface Props {
//   onToggle : (id : number) => void;
// }
const Tasks:React.FC = () => {

  const store = useSelectorTyped((state) => ({tasks: state.tasks.tasks, searchKey: state.tasks.searchKey}), shallowEqual)
  // const serachKey = useSelector((state: RootState) => state.tasks.searchKey)
    
    return (
      <>
      {
        store.searchKey === "" ? (store.tasks.map((task)=> (
          <Task key={task.id} task = {task}/>
      ))) : (store.tasks.filter((s) => s.text.startsWith(store.searchKey)).map((task)=> (
          <Task key={task.id} task = {task} />
      ))
      )
        
      }
      </>
    );
  }

export default React.memo(Tasks) ;