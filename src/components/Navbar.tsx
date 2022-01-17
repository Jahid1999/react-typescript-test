import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import  {actionCreators}  from '../state';
function Navibar() {
    const dispatch = useDispatch();
    const {searchTask } = bindActionCreators(actionCreators, dispatch)

    const filterTask = (e: any) => {
        console.log(e.target.value)
        searchTask(e.target.value);
    }
    return (

        <Navbar bg="dark" variant={"dark"} expand="sm">
            {/* <Container> */}
            
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto mx-2 ml-lg-3"
                    style={{ maxHeight: '30px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to={"/users"} >
                        Users
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={filterTask}
                    />
                    <Button variant="outline-success" >Search</Button>
                </Form>
                </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
      
    );
  }

export default Navibar;