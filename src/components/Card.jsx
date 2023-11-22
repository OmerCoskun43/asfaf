import Language from "./Language";
import { data } from "../helpers/data";
import Container from "react-bootstrap/Container";

const Card = () => {
  console.log(data);
  return (
    <Container style={{ background: "blue" }} className="rounded-5 ">
      <h1 className="text-light text-center mt-2 rounded-5">Language</h1>
      <div className="d-flex flex-wrap  justify-content-center align-items-center mt-3 ">
        {data.map((dat, index) => {
          return <Language key={index} dat={dat} />;
        })}
      </div>
    </Container>
  );
};

export default Card;
