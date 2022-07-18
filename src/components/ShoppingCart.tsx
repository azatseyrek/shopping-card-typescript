import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Stack,
} from 'react-bootstrap';
import {useShoppingCart} from '../context/ShoppingCartContext';
import {formatCurrency} from '../utilities/formatCurrency';
import {CartItem} from './CartItem';
import storeItems from '../data/items.json';

type openProps = {
  isOpen: boolean;
};

const ShoppingCart = ({isOpen}: openProps) => {
  const {closeCart, cartItems} = useShoppingCart();
  return (
    <Offcanvas
      show={isOpen}
      onHide={closeCart}
      placement="end"
      className="bg-dark"
    >
      <OffcanvasHeader closeButton className="bg-warning">
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5 text-warning">
            Total
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0),
            )}
          </div>
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default ShoppingCart;
