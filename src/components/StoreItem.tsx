import {Card} from 'react-bootstrap';

type StoreItemProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

const StoreItem = ({id, name, imageUrl, price}: StoreItemProps) => {
  return (
    <Card className="bg-warning">
      <Card.Img
        variant="top"
        src={imageUrl}
        height="200px"
        style={{objectFit: 'cover', borderRadius: '8px'}}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
