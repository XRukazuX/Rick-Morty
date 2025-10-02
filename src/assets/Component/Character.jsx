import { useParams, Link } from "react-router-dom";
function Character() {
  const { name, id } = useParams();
  console.log(id, " ", name);
  return (
    <>
      <Link to="/">Home</Link>
      <p>caracteres</p>
    </>
  );
}
export default Character;
