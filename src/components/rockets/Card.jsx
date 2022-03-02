import { Button, Card } from 'react-bootstrap';
const RocketCard = ({ props }) => {
  const { flickr_images, description, rocket_name } = props;
  return (
    <Card>
      <div className="row">
        <div className="col-lg-4 col-xl-3">
          <Card.Img variant="bottom" src={flickr_images[0]} />
        </div>
        <div className="col-lg-8 col-xl-9">
          <Card.Body>
            <Card.Title>{rocket_name}</Card.Title>
            <Card.Text style={{ maxHeight: '221px', overflow: 'auto' }}>
              {description}
            </Card.Text>
            <Button variant="primary">Reserve Rocket</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default RocketCard;
