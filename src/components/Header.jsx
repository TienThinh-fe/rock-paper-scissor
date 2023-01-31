import Logo from "../assets/logo.svg";

import useStore from "../store";

export function Header() {
  const score = useStore((state) => state.score);

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
