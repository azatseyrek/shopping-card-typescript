import {Card} from 'react-bootstrap';
import {formatCurrency} from '../utilities/formatCurrency';

type StoreItemProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

const StoreItem = ({id, name, imageUrl, price}: StoreItemProps) => {
  return (
    <Card className="bg-warning" style={{borderRadius: '8px'}}>
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
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
