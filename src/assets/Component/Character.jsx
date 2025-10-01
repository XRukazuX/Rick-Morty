import { useParams } from "react-router-dom";
function Character() {
  const { name, id } = useParams();
  console.log(id, " ", name);
  return (
    <>
      <p>caracteres</p>
    </>
  );
}
export default Character;
