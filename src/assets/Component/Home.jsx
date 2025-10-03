import Open from "./Open";
import { useEffect } from "react";

function Home({
  Filter,
  Status,
  Datos,
  setDatos,
  X,
  setX,
  setFilter,
  setStatus,
}) {
  const api = (link) => {
    fetch(link)
      .then((e) => e.json())
      .then((e) => setDatos(e))
      .catch((err) => console.log("Error:", err));
  };

  useEffect(() => {
    api(X);
    if (Filter && Status) {
      setFilter("");
      setStatus("");
      //Para Limpiar el filtro una vez se usaron
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [X]);
  //console.log(Datos);
  return (
    <>
      {!Datos && <p>Datos inexistentes</p>}
      {Datos &&
        !Filter &&
        !Status &&
        Datos?.results?.map((e, key) => <Open Datos={e} key={key} />)}
      {Datos &&
        Filter &&
        Datos?.results?.map((e, key) => <Open Datos={e} key={key} />)}
      {Datos?.error && <p>No se encontraron coincidencias</p>}
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
