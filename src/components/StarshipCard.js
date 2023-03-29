import Card from "react-bootstrap/Card";
import { useState } from "react";

function StarShipCard(props) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div>
      <Card
        className="bg-success border-dark"
        style={{ width: "20rem", height: "10rem" }}
      >
        <Card.Body onClick={toggleDetails}>
          <Card.Title className="text-white">{props.name} </Card.Title>
          {showDetails && (
            <ul className="mt-1 text-white">
              <li>Model: {props.model}</li>
              <li>Manufacturer: {props.manufacturer}</li>
              <li>Starship Class: {props.starship_class}</li>
            </ul>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default StarShipCard;