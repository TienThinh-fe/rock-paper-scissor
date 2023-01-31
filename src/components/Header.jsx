import { useEffect } from "react";
import Logo from "../assets/logo.svg";

import useStore from "../store";

export function Header() {
  const [score, setScore] = useStore((state) => [state.score, state.setScore]);

  useEffect(() => {
    // check local storage for score
    const localScore = localStorage.getItem("score");
    if (localScore) {
      setScore(parseInt(localScore));
    }
  }, []);

  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
        <h1 style={{ display: "none" }}>Rock, Paper, and Scissors</h1>
      </div>
      <div className="header__score">
        <p className="header__score--title">Score</p>
        <span className="header__score--number">{score}</span>
      </div>
    </header>
  );
}
