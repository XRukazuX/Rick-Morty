import { useParams } from "react-router-dom";
function Episode() {
  const { id } = useParams();
  console.log("Id= ", id);
  return (
    <>
      <h3>Entro a episode</h3>
    </>
  );
}
export default Episode;
