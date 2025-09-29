function Nav(Filter, setFilter, Status, setStatus) {
  const form = (e) => {
    e.preventDefault();
    if (!Status) {
      alert("Por favor selecciona un status válido.");
      return;
    }
    console.log(Filter);
    console.log(Status);
  }; //Control del formulario al submit
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
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
export default Nav;
