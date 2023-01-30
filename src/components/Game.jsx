import { Header } from "./Header";
import { RulesButton } from "./RulesButton";
import { UserPick } from "./UserPick";

export function Game() {
  return (
    <div className="game">
      <Header />
      <RulesButton />
      <UserPick />
    </div>
  );
}
