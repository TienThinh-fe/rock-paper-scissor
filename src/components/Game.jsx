import { UserPick } from "./UserPick";
import { Result } from "./Result";

import useStore from "../store";

export function Game() {
  const isPicked = useStore((state) => state.isPicked);

  return (
    <div className="game">{/* {isPicked ? <Result /> : <UserPick />} */}</div>
  );
}
