import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./assets/Component/Home";
import Title from "./assets/Logos/Title1.png";
import Nav from "./assets/Component/Nav";
import Character from "./assets/Component/Character";
import Episode from "./assets/Component/Episode";
import Location from "./assets/Component/Location";
import Mistake from "./assets/Component/Mistake";
import "./App.css";

function App() {
  const start = "https://rickandmortyapi.com/api/character";
  const [Filter, setFilter] = useState(""); //El valor del texto a buscar no pueder ser booleano
  const [Status, setStatus] = useState(""); //Status del select
  const [X, setX] = useState(start);
  const [Data, setData] = useState(null); //Data obtenido de la url de la api
  return (
    <>
      <Router>
        <div className="mark"></div>
        <Link
          to="/"
          onClick={() => {
            setX(start);
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
                  setData={setData}
                  setX={setX}
                  Data={Data}
                />
              </>
            }
          ></Route>
          <Route
            path="/Character/:name/:id"
            element={<Character setX={setX} />}
          ></Route>
          <Route path="/Episode/:id" element={<Episode />}></Route>
          <Route path="/Location/:id" element={<Location />}></Route>
          <Route path="*" element={<Mistake />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
