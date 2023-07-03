import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';

function Bar() {
  // changes hrefs later
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>ASC</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className =" d-flex justify-content-end" id="basic-navbar-nav">
          <Nav className="">

            <LinkContainer to="/location">
              <Nav.Link>Contact/Location</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/coaches'>
              <Nav.Link>Coaches</Nav.Link>
            </LinkContainer>

            <NavDropdown title="League" id="basic-nav-dropdown">
              <LinkContainer to='./league'>
                <NavDropdown.Item>Details</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='./register'>
                <NavDropdown.Item>Register</NavDropdown.Item>
              </LinkContainer>

            </NavDropdown>
            <NavDropdown title = "Rental" id="basic-nav-dropdown2">
            <LinkContainer to='./balls'>
              <NavDropdown.Item>Soccer Balls</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to='/cleats'>
              <NavDropdown.Item>Cleats</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to='./gloves'>
              <NavDropdown.Item>Goalie Gloves</NavDropdown.Item>
            </LinkContainer>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;