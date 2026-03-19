import "../Style/Nav.css";
function Nav({ Filter, setFilter, Status, setStatus, setX }) {
  const filtro = () => {
    const name = encodeURIComponent(Filter);

    let url = `https://rickandmortyapi.com/api/character/?name=${name}`;

    if (Status) {
      url += `&status=${Status}`;
    }

    setX(url);
  };
  const form = (e) => {
    e.preventDefault();
    filtro();
    setFilter("");
    setStatus("");
  }; //Control del formulario al submit
  return (
    <>
      <div id="Nav">
        <form action="busqueda" className="Form-search" onSubmit={form}>
          <input
            id="Text"
            type="text"
            placeholder="Character Finder"
            required
            value={Filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <select
            className="Status"
            name="Status"
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <input className="boton color-boton" type="submit" value="Search" />
        </form>
      </div>
    </>
  );
}
export default Nav;
