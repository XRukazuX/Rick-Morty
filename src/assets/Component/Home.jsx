import Open from "./Open";
import { useState, useEffect } from "react";
function Home({ Filter, Status }) {
  const [X, setX] = useState("https://rickandmortyapi.com/api/character");
  const [Datos, setDatos] = useState(null); //Datos obtenido de la url
  const api = (link) => {
    fetch(link)
      .then((e) => e.json())
      .then((e) => setDatos(e))
      .catch((err) => console.log("Error:", err));
  };
  useEffect(() => {
    api(X);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [X]);
  console.log(Datos);
  return (
    <>
      {Datos && !Filter && !Status ? (
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
export default Home;
