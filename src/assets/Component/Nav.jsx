import "../Style/Nav.css";
function Nav({ Filter, setFilter, Status, setStatus, setX }) {
  const filtro = () => {
    const name = Filter.replace(" ", "%20");
    const status = Status
      ? `https://rickandmortyapi.com/api/character/?name=${name}&status=${Status}`
      : `https://rickandmortyapi.com/api/character/?name=${name}`;
    setX(status);
  };
  const form = (e) => {
    e.preventDefault();
  }; //Control del formulario al submit
  return (
    <>
      <div id="Nav">
        <form action="busqueda" className="Form-search" onSubmit={form}>
          <input
            id="Text"
            type="text"
            required
            placeholder="Character Finder"
            value={Filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <select
            className="Status"
            name="Status"
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
          <input
            className="boton color-boton"
            type="submit"
            value="Search"
            onClick={() => filtro()}
          />
        </form>
      </div>
    </>
  );
}
export default Nav;
