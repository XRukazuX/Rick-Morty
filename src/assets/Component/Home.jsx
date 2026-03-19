import Open from "./Open";
import { useEffect, useCallback } from "react";
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
  const api = useCallback(
    (link) => {
      fetch(link)
        .then((e) => e.json())
        .then((e) => setData(e))
        .catch((err) => console.log("Error:", err));
    },
    [setData],
  );

  useEffect(() => {
    api(X);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [X, api]);
  return (
    <>
      <div id="contenedor">
        {!Data && <p id="error">Non-existent data</p>}
        {Data?.results?.map((e, key) => (
          <Open Data={e} key={key} />
        ))}
        {Data?.error && !Status && <h2 id="error">{Data.error}</h2>}
      </div>
      <div className="move">
        {Data?.info?.prev && !Status && (
          <input
            type="button"
            className="boton1 color-boton1"
            onClick={() => {
              setX(Data.info.prev);
            }}
            value="Previous"
          />
        )}
        {Data?.info?.next && !Status && (
          <input
            type="button"
            className="boton1 color-boton1"
            onClick={() => {
              setX(Data.info.next);
            }}
            value="Next"
          />
        )}
      </div>
    </>
  );
}
export default Home;
