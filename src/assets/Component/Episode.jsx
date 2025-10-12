import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/Episode.css";
function Episode() {
  const { id } = useParams(); //Id del episodio a usar en Api
  const [Info, setInfo] = useState(null); //Datos del episodio
  const [Characters, setCharacters] = useState(null); //Datos de los personajes del episodio
  const character = useMemo(() => {
    return Info?.characters?.map((e) => e.split("/").pop()).join(","); //Contiene los id de los caracteres que ocupan la localizacion;
  }, [Info]); //Paso para obtener Id de los personajes del episodio
  const api = useMemo(() => {
    return `https://rickandmortyapi.com/api/character/${character}`;
  }, [character]); //Link Con las Id de "character" para buscar la info de personajes
  const episode = (id) => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((response) => {
        if (!response.ok) {
          // Aquí controlás el 404 u otro error
          throw new Error(`Ubicación con ID ${id} no encontrada.`);
        }
        return response.json();
      })
      .then((e) => setInfo(e))
      .catch((e) => console.log("Error", e));
  }; //Api del episodio
  const apiCharacters = (e) => {
    fetch(e)
      .then((e) => e.json())
      .then((e) => setCharacters(e))
      .catch((error) => console.log("Error de character", error));
  }; //Api para consumir los datos de los personajes
  useEffect(() => {
    episode(id);
  }, []); //consumir Api del episodio
  useEffect(() => {
    if (Info) {
      apiCharacters(api);
    }
  }, [Info]); //Consumir api de los personajes solo si existe "Info"
  return (
    <>
      {Characters && (
        <div id="conteiner5">
          <h1>{Info ? ` ${Info.episode}-${Info.name}` : "Unknown"}</h1>
          <h3>Release:{Info ? Info.air_date : "Unknown"}</h3>
          <h3> Characters of the episode</h3>
        </div>
      )}
      <div id="conteiner2">
        {Characters ? (
          Characters?.map((e) => {
            return (
              <Card key={e.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={e.image} />
                <Card.Body id="nombre">
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
          <div id="conteiner1">
            <h1 className="error">Loading error, check search parameters</h1>
          </div>
        )}
      </div>
    </>
  );
}
export default Episode;
