import Card from "react-bootstrap/Card"; //componentes de carta

function Open(Datos) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Datos.results[0].image} />
      <Card.Body>
        <Card.Title>
          <Card.Link href={Datos.results[0].url}>
            {Datos.results[0].name}
          </Card.Link>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {`${Datos.results[0].status}-${Datos.results[0].species}`}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Localizacion:
          <Card.Link href={Datos.results[0].location.url}>
            {Datos.results[0].location.name}
          </Card.Link>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Origen:{" "}
          <Card.Link href={Datos.results[0].origin.url}>
            {Datos.results[0].origin.name}
          </Card.Link>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default Open;
