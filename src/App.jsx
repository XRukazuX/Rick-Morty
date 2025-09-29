import { useState, useEffect } from "react";
import Open from "./assets/Component/Open";
import "./App.css";

function App() {
  const [X, setX] = useState("https://rickandmortyapi.com/api/character");
  const [Filter, setFilter] = useState(""); //El valor del texto a buscar no pueder ser booleano
  const [prueba, setprueba] = useState(""); //Status del select
  const [Datos, setDatos] = useState(null); //Datos obtenido de la url
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Filter", typeof Filter);
    console.log("prueba", typeof prueba);
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
      {Datos && !Filter && !prueba ? (
        Datos?.results.map((e, key) => <Open Datos={e} key={key} />)
      ) : (
        <p>Datos en espera</p>
      )}
      {Datos?.info?.prev && (
        <input
          type="button"
          onClick={() => {
            setX(Datos.info.prev);
          }}
          value="Anterior"
        />
      )}
      {Datos?.info?.next && (
        <input
          type="button"
          onClick={() => {
            setX(Datos.info.next);
          }}
          value="Siguiente"
        />
      )}
    </>
  );
}

export default App;
