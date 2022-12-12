import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "./CMOLogo.png"

export const NavBar = ({ token, setToken }) => {
    const navigate = useNavigate()
    
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="75"
              height="75"
              className="d-inline-block align-top"
              alt="CMO Logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown className="me-auto" title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              {
                token
                  ?
                  <Button variant='outline-dark' onClick={() => {
                    setToken('')
                    navigate('/login')
                  }}>Logout</Button>
                  :
                  <>
                    <Link to="/register" className="button">Register</Link>
                    <Link to="/login" className="button">Login</Link>
                  </>
                }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;