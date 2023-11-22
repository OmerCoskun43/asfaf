import { useState } from "react";

import Image from "react-bootstrap/Image";

const Language = ({ dat }) => {
  const [showList, setShowList] = useState(false);
  const { name, img, options } = dat;
  const handleClick = (e) => {
    setShowList(!showList);

    if (showList) {
      e.target.style.background = "fuchsia";
    } else if (!showList) {
      e.target.style.background = "yellow";
    }
  };
  return (
    <div
      style={{ background: "yellow", width: "250px", height: "40vh" }}
      className="mx-2 my-2 text-center text-danger rounded-5 p-1 d-flex flex-column justify-content-center align-items-center  "
      onClick={handleClick}
    >
      {!showList && (
        <>
          <Image src={img} width="200px" roundedCircle />
          <h3 className="fw-bold"> {name} </h3>
        </>
      )}

      {showList && (
        <ul className="text-dark text-start  fw-bold">
          {options.map((option) => {
            return <li> {option} </li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Language;
