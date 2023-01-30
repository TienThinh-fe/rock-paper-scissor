import Logo from "../assets/logo.svg";

import "./styles.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
        <h1 style={{ display: "none" }}>Rock, Paper, and Scissors</h1>
      </div>
      <div className="header__score">
        <p className="header__score--title">Score</p>
        <span className="header__score--number">12</span>
      </div>
    </header>
  );
}
