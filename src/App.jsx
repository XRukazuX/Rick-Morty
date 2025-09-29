import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card"; //componentes de carta
import Open from "./assets/Component/Open";
import "./App.css";

function App() {
  const [X, setX] = useState("https://rickandmortyapi.com/api/character");
  const [Filter, setFilter] = useState(""); //El valor del texto a buscar no pueder ser booleano
  const [prueba, setprueba] = useState(""); //Status del select
  const [Datos, setDatos] = useState(null);
  const form = (e) => {
    e.preventDefault();
    if (!prueba) {
      alert("Por favor selecciona un status válido.");
      return;
    }
    console.log(Filter);
    console.log(prueba);
  }; //Control del formulario al submit
  const api = (link) => {
    fetch(link)
      .then((e) => e.json())
      .then((e) => setDatos(e))
      .catch((err) => console.log("Error:", err));
  };
  useEffect(() => {
    api(X);
  }, [X]);
  console.log(Datos);
  return (
    <>
      <h1>Rick & Morty Api</h1>
      <div id="Nav">
        <form action="busqueda" onSubmit={form}>
          <input
            type="text"
            required
            placeholder="Busqueda"
            value={Filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <select
            name="Status"
            id="asd"
            value={prueba}
            onChange={(e) => {
              setprueba(e.target.value);
            }}
          >
            <option value="" disabled hidden>
              Status
            </option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <input type="submit" />
        </form>
      </div>
      {Datos ? <Open Datos={Datos} /> : <p>Datos en espera</p>}
    </>
  );
}

export default App;
