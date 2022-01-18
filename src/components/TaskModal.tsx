import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {taskInterfaceWithID} from '../App'
import {actionTask} from '../state-redux-toolkit/features/taskSlice'
import { useSelectorTyped } from '../state-redux-toolkit/store';

// interface Props {
//   task: taskInterfaceWithID
// }
interface SelectedTask {
  task: taskInterfaceWithID
}

// export var  selectedTask : SelectedTask = {} as SelectedTask

export class StaticData {
  static  selectedTask : SelectedTask = {} as SelectedTask 
}

const TaskModal:React.FC = () => { 
  // const [show, setShow] = useState(false);
  // const [modalKey, setModalKey] = useState(Date.now() + '')

  const store = useSelectorTyped((state) => ({show: state.tasks.showTaskModal}))
  const dispatch = useDispatch();

  // const handleClose = () => {
  //   setShow(false);
  //   setModalKey(Date.now() + '')
  // }
  if(!StaticData.selectedTask.task)
    return null

    return (
          <Modal
            show={store.show}
            onHide={() => {dispatch(actionTask.handleHideTask())}}
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>{StaticData.selectedTask.task.text}</h5>
              <p>{StaticData.selectedTask.task.date}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => {dispatch(actionTask.handleHideTask())}}>
                Close
              </Button>
              <Button variant="primary" onClick={() => {dispatch(actionTask.handleHideTask())}}>
              Save Changes
            </Button>
            </Modal.Footer>
          </Modal>
    );
  }
  
//   render(<Example />);
export default React.memo(TaskModal);