import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Location() {
  const { id } = useParams();
  const [Location, setLocation] = useState(null);
  const character = Location?.residents
    ?.map((e) => e.split("/").pop())
    .join(",");
  const apiLocation = (a) => {
    fetch(`https://rickandmortyapi.com/api/location/${a}`)
      .then((e) => e.json())
      .then((k) => setLocation(k))
      .catch((error) => console.log("Error", error));
  };
  useEffect(() => {
    apiLocation(id);
  }, []);
  console.log(Location);
  console.log(character);
  return (
    <>
      <h3>Entro a location</h3>
    </>
  );
}
export default Location;
