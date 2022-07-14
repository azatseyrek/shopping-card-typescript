import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {BsFillCartFill} from 'react-icons/bs';

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-secondary shadow-lg mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{width: '3rem', height: '3rem', position: 'relative'}}
          variant="outline-dark"
          className="rounded-circle"
        >
          <BsFillCartFill size="1.5rem" color="black" />
          <div
            className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
            style={{
              color: 'black',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              bottom: 0,
              right: 0,
              transform: 'translate(25%, 25%)',
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
