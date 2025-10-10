import Card from "react-bootstrap/Card"; //componentes de carta
import { Link } from "react-router-dom";
import "../Style/Open.css";

function Open(Data, key) {
  const status = () => {
    if (Data.Data.status.toLowerCase() == "alive") {
      return "alive";
    } else if (Data.Data.status.toLowerCase() == "dead") {
      return "dead";
    } else if (Data.Data.status.toLowerCase() == "unknown") {
      return "unknown";
    }
  };
  return (
    <Card key={key} id="card-style" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Data.Data.image} />
      <Card.Body>
        <Card.Title>
          <Card.Link
            as={Link}
            to={`/Character/${Data.Data.name}/${Data.Data.id}`}
          >
            {Data.Data.name}
          </Card.Link>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted status" id={`${status()}`}>
          {`${Data.Data.status}-${Data.Data.species}`}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          <strong>Location:</strong>
          <Card.Link
            as={Link}
            to={`/Location/${Data.Data.location.url.split("/").pop()}`}
          >
            {Data.Data.location.name}
          </Card.Link>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          <strong>Origin:</strong>
          <Card.Link
            as={Link}
            to={`/Location/${Data.Data.origin.url.split("/").pop()}`}
          >
            {Data.Data.origin.name}
          </Card.Link>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default Open;
