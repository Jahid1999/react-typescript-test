import { Modal, Button } from 'react-bootstrap';

interface Props {
  show: boolean,
  onHide: () => void;
}
const Example:React.FC<Props> = ({show, onHide}) => { 
  console.log(show)
    return (
      <>
        <Modal
          show={show}
          onHide={() => {onHide()}}
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Hello from Modal.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {onHide()}}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {onHide()}}>
            Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
//   render(<Example />);
export default Example;