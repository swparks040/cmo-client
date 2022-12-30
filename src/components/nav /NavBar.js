import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Logo from "./CMOLogo.png";

export const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
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
            <NavDropdown
              className="me-auto"
              title="Portals"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/pto">PTO</NavDropdown.Item>
              <NavDropdown.Item href="/family">Family</NavDropdown.Item>
              <NavDropdown.Item href="/promo">Promotion</NavDropdown.Item>
              <NavDropdown.Item href="/eval">Evaluations</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Button
                variant="outline-dark"
                onClick={() => {
                  localStorage.removeItem("auth_token");
                  navigate('/login');
                }}
              >
                Logout
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
