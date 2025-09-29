import Card from "react-bootstrap/Card"; //componentes de carta

function Open(Datos, key) {
  console.log(Datos.Datos);
  return (
    <Card key={key} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Datos.Datos.image} />
      <Card.Body>
        <Card.Title>
          <Card.Link href={Datos.Datos.url}>{Datos.Datos.name}</Card.Link>
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
