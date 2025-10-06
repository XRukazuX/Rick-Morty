import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
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
      .then((e) => e.json())
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
  console.log(Location);
  console.log(Characters);
  return (
    <>
      <h3>Entro a location</h3>
    </>
  );
}
export default Location;
