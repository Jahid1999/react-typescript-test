import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {
  children: JSX.Element,
}
const ParentModal:React.FC<Props> = ({children}) => { 
    return (
      <>
       {children}
      </>
    );
  }
  
//   render(<Example />);
export default React.memo(ParentModal);