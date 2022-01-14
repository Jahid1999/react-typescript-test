import Task from './Task'
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';

interface Props {
  onToggle : (id : number) => void;
}
const Tasks:React.FC<Props> = ({onToggle}) => {

  const state = useSelector((state: RootState) => state.task.tasks)
  const serachKey = useSelector((state: RootState) => state.task.searchKey)
    
    return (
      <>
      {
        serachKey == "" ? (state.map((task)=> (
          <Task key={task.id} task = {task}  onToggle={onToggle} />
      ))) : (state.filter((s) => s.text.startsWith(serachKey)).map((task)=> (
          <Task key={task.id} task = {task}  onToggle={onToggle} />
      ))
      )
        
      }
      </>
    );
  }

export default Tasks;