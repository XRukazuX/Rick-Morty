import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Character() {
  const { name, id } = useParams();
  const [Date, setDate] = useState(null);
  const character = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((e) => e.json())
      .then((e) => setDate(e))
      .catch((e) => console.log("Error", e));
  };
  useEffect(() => {
    character(id);
  }, []);
  console.log(Date);
  return (
    <>
      <div>
        <div>
          <h2>{Date?.name}</h2>
          <h3>{Date?.status}</h3>
        </div>
        <section>
          <img src={Date?.image} alt="Personaje" />
        </section>
        <h4>Species: {Date?.species}</h4>
        <h4>Gender: {Date?.gender}</h4>
        <h4>
          Origin: <Link to="/Location">{Date?.origin?.name}</Link>
        </h4>
        <h4>
          Location: <Link>{Date?.location?.name}</Link>
        </h4>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Episode</Accordion.Header>
            <Accordion.Body>
              <ListGroup variant="flush">
                {Date?.episode?.map((e, key) => {
                  let number = e.split("/").pop();
                  return (
                    <ListGroup.Item key={key}>
                      <Link to="/Episode">Episode {number}</Link>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
export default Character;
