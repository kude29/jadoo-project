import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../App.css';
import './NavBar.css'


function NavBar() {
  return (
    <div className='header'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='brand'  href="#home"><img src="src/assets/images/Logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-5">
            <Nav.Link href="#home">Destinations</Nav.Link>
            <Nav.Link href="#link">Hotels</Nav.Link>
            <Nav.Link href="#link">Flights</Nav.Link>
            <Nav.Link href="#link">Bookings</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link className='border-box' href="#link">Sign Up</Nav.Link>
            <NavDropdown title="EN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ED</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;