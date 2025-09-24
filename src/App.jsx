import { useState } from "react";
import Card from "react-bootstrap/Card"; //componentes de carta
import "./App.css";

function App() {
  const [count, setCount] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [prueba, setprueba] = useState(null);
  const api = (link) => {
    fetch(link)
      .then((e) => e.json())
      .then((e) => console.log(e))
      .catch(console.log("error"));
  };
  api(count);
  return (
    <>
      <h1>Rick & Morty Api</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
