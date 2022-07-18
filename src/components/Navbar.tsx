import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {BsFillCartFill} from 'react-icons/bs';
import {useShoppingCart} from '../context/ShoppingCartContext';

const Navbar = () => {
  const {openCart, closeCart, cartQuantity} = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-dark  shadow-lg mb-3">
      <Container>
        <Nav className="me-auto ">
          <Nav.Link as={NavLink} className="text-warning hover-overlay" to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store" className="text-warning">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="text-warning">
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{width: '3rem', height: '3rem', position: 'relative'}}
          variant="outline-warning"
          className="rounded-circle"
          onClick={() => openCart()}
        >
          <BsFillCartFill size="1.5rem" color="lightgrey" />
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
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
