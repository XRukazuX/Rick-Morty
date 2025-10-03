function Nav({ Filter, setFilter, Status, setStatus, setX }) {
  /*const apiResult = (Name, Status) => {
    let adjustedname = Name.replace(" ", "%20");

    fetch(
      `https://rickandmortyapi.com/api/character/?name=${adjustedname}&status=${Status}`
    )
      .then((e) => e.json())
      .then((e) => setDatos(e))
      .catch((err) => console.log("error de filtrado", err));
  };*/
  const filtro = () => {
    const name = Filter.replace(" ", "%20");
    const status = Status
      ? `https://rickandmortyapi.com/api/character/?name=${Filter.replace(
          " ",
          "%20"
        )}&status=${Status}`
      : `https://rickandmortyapi.com/api/character/?name=${Filter.replace(
          " ",
          "%20"
        )}`;
    setX(status);
  };
  const form = (e) => {
    e.preventDefault();
    /*if (!Status) {
      alert("Por favor selecciona un status válido.");
      return;
    }
    console.log(Filter);
    console.log(Status);
    console.log("Datos Filtados:", Datos);*/
  }; //Control del formulario al submit
  return (
    <>
      <div id="Nav">
        <form action="busqueda" onSubmit={form}>
          <input
            type="text"
            required
            placeholder="Search"
            value={Filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <select
            name="Status"
            id="asd"
            value={Status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="" disabled hidden>
              Status
            </option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <input type="submit" value="Search" onClick={() => filtro()} />
        </form>
      </div>
    </>
  );
}
export default Nav;
