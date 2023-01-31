import { useEffect, useState } from "react";
import { Pick } from "./Pick";
import useStore from "../store";
import { RandomHousePick, GetResult } from "../helper";

import IconPaper from "../assets/icon-paper.svg";
import IconRock from "../assets/icon-rock.svg";
import IconScissors from "../assets/icon-scissors.svg";

export function Result() {
  const userPick = useStore((state) => state.userPick);
  const setIsPicked = useStore((state) => state.setIsPicked);

  const [imgSrc, setImgSrc] = useState(IconPaper);
  const [houseImgSrc, setHouseImgSrc] = useState(IconPaper);
  const [housePick, setHousePick] = useState("");
  const [housePicked, setHousePicked] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    switch (userPick) {
      case "Paper":
        setImgSrc(IconPaper);
        break;
      case "Rock":
        setImgSrc(IconRock);
        break;
      case "Scissors":
        setImgSrc(IconScissors);
        break;
    }

    const timeout = setTimeout(() => {
      setHousePick(() => RandomHousePick());
      setHousePicked(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (housePick === "") return;

    switch (housePick) {
      case "Paper":
        setHouseImgSrc(IconPaper);
        break;
      case "Rock":
        setHouseImgSrc(IconRock);
        break;
      case "Scissors":
        setHouseImgSrc(IconScissors);
        break;
    }

    setResult(() => GetResult(userPick, housePick));
  }, [housePicked]);

  return (
    <div className="result" style={{ width: "64%" }}>
      <div className="result__you">
        <div
          className="result__you__title"
          onClick={() => {
            console.log(1);
            setHousePicked(true);
          }}
        >
          You Picked
        </div>
        <div className="result__you__pick">
          <Pick imageSrc={imgSrc} type={userPick} />
        </div>
        {result === "You won" ? (
          <div className="result__you__overlay">
            <div className="result__you__overlay--item one"></div>
            <div className="result__you__overlay--item two"></div>
            <div className="result__you__overlay--item three"></div>
          </div>
        ) : null}
      </div>
      <div className="result__show">
        <div className="result__show__title">
          {housePicked ? result : "..."}
        </div>
        <div
          className="result__show__play-again"
          onClick={() => setIsPicked(false)}
        >
          <span>Play Again</span>
        </div>
      </div>
      <div className="result__house">
        <div className="result__house__title">
          {housePicked ? "The house picked" : "The house is picking"}
        </div>
        <div className="result__house__pick">
          {housePicked ? (
            <Pick imageSrc={houseImgSrc} type={housePick} />
          ) : null}
        </div>
        {result === "You lose" ? (
          <div className="result__house__overlay">
            <div className="result__house__overlay--item one"></div>
            <div className="result__house__overlay--item two"></div>
            <div className="result__house__overlay--item three"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
