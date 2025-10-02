import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./assets/Component/Home";
import Nav from "./assets/Component/Nav";
import Character from "./assets/Component/Character";
import "./App.css";

function App() {
  const [Filter, setFilter] = useState(""); //El valor del texto a buscar no pueder ser booleano
  const [Status, setStatus] = useState(""); //Status del select
  const [Results, setResults] = useState(null); //Datos filtrados
  const [X, setX] = useState("https://rickandmortyapi.com/api/character");
  const [Datos, setDatos] = useState(null); //Datos obtenido de la url
  return (
    <Router>
      <h1>Rick & Morty Api</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav
                Results={Results}
                setResults={setResults}
                Filter={Filter}
                setFilter={setFilter}
                Status={Status}
                setStatus={setStatus}
                setX={setX}
              />
              <Home
                Filter={Filter}
                Status={Status}
                X={X}
                setDatos={setDatos}
                setX={setX}
                Datos={Datos}
              />
            </>
          }
        ></Route>
        <Route path="/Character/:name/:id" element={<Character />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
