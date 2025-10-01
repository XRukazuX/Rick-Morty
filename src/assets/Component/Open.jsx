import Card from "react-bootstrap/Card"; //componentes de carta
import { Link } from "react-router-dom";
function Open(Datos, key) {
  return (
    <Card key={key} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Datos.Datos.image} />
      <Card.Body>
        <Card.Title>
          <Card.Link
            as={Link}
            to={`/Character/${Datos.Datos.name}/${Datos.Datos.id}`}
          >
            {Datos.Datos.name}
          </Card.Link>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {`${Datos.Datos.status}-${Datos.Datos.species}`}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Localizacion:
          <Card.Link href={Datos.Datos.location.url}>
            {Datos.Datos.location.name}
          </Card.Link>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Origen:
          <Card.Link href={Datos.Datos.origin.url}>
            {Datos.Datos.origin.name}
          </Card.Link>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default Open;
