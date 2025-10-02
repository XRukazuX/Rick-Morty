import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Character() {
  const { name, id } = useParams();
  const [Date, setDate] = useState(null);
  console.log("id:", id, "name:", name);
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
        <h2>{Date?.name}</h2>
        <section>
          <img src={Date?.image} alt="Personaje" />
        </section>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Episodios</Accordion.Header>
            <Accordion.Body>
              <ListGroup as="ol" numbered>
                {Date?.episode?.map((e, key) => {
                  let number = e.split("/").pop();
                  return (
                    <ListGroup.Item key={key} as="li">
                      <Link>Episodio {number}</Link>
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
