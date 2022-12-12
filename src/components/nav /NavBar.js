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
            <Nav.Link href="/">Dashboard</Nav.Link>
            <NavDropdown className="me-auto" title="Portals" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ptoportal">PTO Request</NavDropdown.Item>
              <NavDropdown.Item href="/familyportal">
                Update Family
              </NavDropdown.Item>
              <NavDropdown.Item href="/promoportal">Promotion</NavDropdown.Item>
              <NavDropdown.Item href="/evalportal">
                Evaluations
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