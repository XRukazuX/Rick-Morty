import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./assets/Component/Home";
import Title from "./assets/Logos/Title1.png";
import Nav from "./assets/Component/Nav";
import Character from "./assets/Component/Character";
import "./App.css";

function App() {
  const inicio = "https://rickandmortyapi.com/api/character";
  const [Filter, setFilter] = useState(""); //El valor del texto a buscar no pueder ser booleano
  const [Status, setStatus] = useState(""); //Status del select
  const [X, setX] = useState(inicio);
  const [Datos, setDatos] = useState(null); //Datos obtenido de la url
  return (
    <Router>
      <Link
        to="/"
        onClick={() => {
          setX(inicio);
        }}
      >
        <img src={Title} alt="Title" />
      </Link>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav
                Filter={Filter}
                setFilter={setFilter}
                Status={Status}
                setStatus={setStatus}
                setX={setX}
              />
              <Home
                Filter={Filter}
                Status={Status}
                setStatus={setStatus}
                setFilter={setFilter}
                X={X}
                setDatos={setDatos}
                setX={setX}
                Datos={Datos}
              />
            </>
          }
        ></Route>
        <Route
          path="/Character/:name/:id"
          element={<Character setX={setX} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
