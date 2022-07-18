import {Button, Card} from 'react-bootstrap';
import {useShoppingCart} from '../context/ShoppingCartContext';
import {formatCurrency} from '../utilities/formatCurrency';

type StoreItemProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

const StoreItem = ({id, name, imageUrl, price}: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="bg-warning h-100" style={{borderRadius: '8px'}}>
      <Card.Img
        variant="top"
        src={imageUrl}
        height="200px"
        style={{objectFit: 'cover', borderRadius: '8px'}}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name}</span>
          <span className=" ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              onClick={() => increaseCartQuantity(id)}
              className="w-100 bg-dark border-0"
            >
              {' '}
              + Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{gap: '.5rem'}}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{gap: '.5rem'}}
              >
                <Button onClick={() => decreaseCartQuantity(id)} variant="dark">
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)} variant="dark">
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
