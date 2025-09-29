import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./assets/Component/Home";
import Nav from "./assets/Component/Nav";
import "./App.css";

function App() {
  const [Filter, setFilter] = useState(""); //El valor del texto a buscar no pueder ser booleano
  const [Status, setStatus] = useState(""); //Status del select
  return (
    <Router>
      <Nav
        Filter={Filter}
        setFilter={setFilter}
        Status={Status}
        setStatus={setStatus}
      />
      <Routes>
        <Route
          path="/"
          element={<Home Filter={Filter} Status={Status} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
