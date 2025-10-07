import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Character() {
  const { id, name } = useParams();
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
  return (
    <>
      {Date?.name == name ? (
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
            Origin:
            <Link to={`/Location/${Date?.origin?.url.split("/").pop()}`}>
              {Date?.origin?.name}
            </Link>
          </h4>
          <h4>
            Location:
            <Link to={`/Location/${Date?.location?.url.split("/").pop()}`}>
              {Date?.location?.name}
            </Link>
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
                        <Link to={`/Episode/${number}`}>Episode {number}</Link>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ) : (
        <h1>Nombre e id no coinciden</h1>
      )}
    </>
  );
}
export default Character;
