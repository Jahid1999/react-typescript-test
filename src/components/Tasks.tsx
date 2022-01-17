import Task from './Task'
import { useSelector } from 'react-redux';
// import { RootState } from '../state/reducers';
import { RootState, useSelectorTyped } from '../state-redux-toolkit/store';

interface Props {
  onToggle : (id : number) => void;
}
const Tasks:React.FC<Props> = ({onToggle}) => {

  const store = useSelectorTyped((state) => ({tasks: state.tasks.tasks, searchKey: state.tasks.searchKey}))
  // const serachKey = useSelector((state: RootState) => state.tasks.searchKey)
    
    return (
      <>
      {
        store.searchKey === "" ? (store.tasks.map((task)=> (
          <Task key={task.id} task = {task}  onToggle={onToggle} />
      ))) : (store.tasks.filter((s) => s.text.startsWith(store.searchKey)).map((task)=> (
          <Task key={task.id} task = {task}  onToggle={onToggle} />
      ))
      )
        
      }
      </>
    );
  }

export default Tasks;