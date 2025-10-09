import Open from "./Open";
import { useEffect } from "react";
import "../Style/Home.css";
function Home({
  Filter,
  Status,
  Data,
  setData,
  X,
  setX,
  setFilter,
  setStatus,
}) {
  const api = (link) => {
    fetch(link)
      .then((e) => e.json())
      .then((e) => setData(e))
      .catch((err) => console.log("Error:", err));
  }; //Api de personaje filtrado

  useEffect(() => {
    api(X);
    if (Filter && Status) {
      setFilter("");
      setStatus("");
      //Para Limpiar el filtro una vez se usaron
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [X]);
  //console.log(Data);
  return (
    <>
      <div id="contenedor">
        {!Data && <p>Non-existent data</p>}
        {Data &&
          !Filter &&
          !Status &&
          Data?.results?.map((e, key) => <Open Data={e} key={key} />)}
        {Data &&
          Filter &&
          !Status &&
          Data?.results?.map((e, key) => <Open Data={e} key={key} />)}
        {Data && Status && <h2>Waiting for search</h2>}
        {Data?.error && <p>{Data.error}</p>}
      </div>
      {Data?.info?.prev && (
        <input
          type="button"
          onClick={() => {
            setX(Data.info.prev);
          }}
          value="Previous"
        />
      )}
      {Data?.info?.next && (
        <input
          type="button"
          onClick={() => {
            setX(Data.info.next);
          }}
          value="Next"
        />
      )}
    </>
  );
}
export default Home;
