import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Style/Character.css";
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
        <div id="conteiner11">
          <div id="DateName">
            <h2>
              {Date?.name}-{Date?.status}
            </h2>
          </div>
          <section id="Image">
            <img src={Date?.image} alt="Personaje" />
          </section>
          <div id="DateInfo">
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
          </div>

          <div id="Episode">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Episode</Accordion.Header>
                <Accordion.Body>
                  <ListGroup variant="flush">
                    {Date?.episode?.map((e, key) => {
                      let number = e.split("/").pop();
                      return (
                        <ListGroup.Item key={key}>
                          <Link to={`/Episode/${number}`}>
                            Episode {number}
                          </Link>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      ) : (
        <div id="conteiner1">
          <h1 className="error">Name and ID do not match</h1>
        </div>
      )}
    </>
  );
}
export default Character;
