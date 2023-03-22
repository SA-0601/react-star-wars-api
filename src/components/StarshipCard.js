import Card from "react-bootstrap/Card";

function StarShipCard(props) {
  return (
    <div>
      <Card className="bg-success border-dark" style={{width: "20rem", height: "10rem"}}>
      <Card.Body className="text-center">
        <Card.Title className='text-white'>{props.name}</Card.Title>
      </Card.Body>
      </Card>
    </div>
  );
}

export default StarShipCard;
