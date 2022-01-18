import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import TaskModal from './TaskModal';

const Modals:React.FC = () => { 
    return (
      <>
       <TaskModal />
      </>
    );
  }
  
//   render(<Example />);
export default React.memo(Modals);