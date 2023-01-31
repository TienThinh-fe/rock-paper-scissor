import { useState, useEffect } from "react";

export function Pick({ imageSrc, type, handleClick }) {
  const [typeClass, setTypeClass] = useState("pick");

  useEffect(() => {
    switch (type) {
      case "Paper":
        setTypeClass("pick pick--paper");
        break;
      case "Scissors":
        setTypeClass("pick pick--scissors");
        break;
      case "Rock":
        setTypeClass("pick pick--rock");
        break;
      default:
        setTypeClass("pick pick--paper");
    }
  }, []);

  return (
    <div className={typeClass} onClick={handleClick}>
      <div className="pick__image">
        <img src={imageSrc} alt="Pick" />
      </div>
    </div>
  );
}
