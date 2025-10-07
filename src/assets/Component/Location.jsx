import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Location() {
  const { id } = useParams(); //id o codigo de localizacion a ver
  const [Location, setLocation] = useState(null); //Datos de la localiacion pedida
  const [Characters, setCharacters] = useState(null); //Datos del personaje
  const character = useMemo(() => {
    return Location?.residents?.map((e) => e.split("/").pop()).join(","); //Contiene los id de los caracteres que ocupan la localizacion;
  }, [Location]);
  const api = useMemo(() => {
    return `https://rickandmortyapi.com/api/character/${character}`;
  }, [character]);
  const apiLocation = (a) => {
    fetch(`https://rickandmortyapi.com/api/location/${a}`)
      .then((response) => {
        if (!response.ok) {
          // Aquí controlás el 404 u otro error
          throw new Error(`Ubicación con ID ${id} no encontrada.`);
        }
        return response.json();
      })
      .then((k) => setLocation(k))
      .catch((error) => console.log("Error", error));
  }; //Funcion para obtener la informacion para "Location"
  const apiCharacters = (e) => {
    fetch(e)
      .then((e) => e.json())
      .then((e) => setCharacters(e))
      .catch((error) => console.log("Error de character", error));
  };
  useEffect(() => {
    apiLocation(id);
  }, []); //Solo que se obtengan los datos al cargar la pagina
  useEffect(() => {
    if (Location) {
      apiCharacters(api);
    }
  }, [Location]); //Se obtiene datos de los personajes del episodio solo cuando tengo Location
  return (
    <>
      <h1>{Location?.name || "Unknown"}</h1>
      <h4>Type: {Location?.type || "Unknown"}</h4>
      <h4>Dimension: {Location?.dimension || "Unknown"}</h4>
      <h3>
        Characters of the Location:
        {Characters ? "" : "Unknown"}
      </h3>
      <div>
        {Characters ? (
          Characters?.map((e) => {
            return (
              <Card key={e.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                  <Card.Link
                    as={Link}
                    to={`/Character/${e.name.replace(" ", "%20")}/${e.id}`}
                  >
                    {e.name}
                  </Card.Link>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <h1>Loading error, check search parameters</h1>
        )}
      </div>
    </>
  );
}
export default Location;
