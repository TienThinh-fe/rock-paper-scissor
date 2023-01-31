import BgTriangle from "../assets/bg-triangle.svg";
import IconPaper from "../assets/icon-paper.svg";
import IconRock from "../assets/icon-rock.svg";
import IconScissors from "../assets/icon-scissors.svg";

import { Pick } from "./Pick";

import useStore from "../store";

export function UserPick() {
  const [userPick, setUserPick] = useStore((state) => [
    state.userPick,
    state.setUserPick,
  ]);
  const [isPicked, setIsPicked] = useStore((state) => [
    state.isPicked,
    state.setIsPicked,
  ]);

  const handlePick = (pick) => {
    setUserPick(pick);
    setIsPicked(true);
  };

  return (
    <>
      <div className="user-pick__background">
        <img src={BgTriangle} alt="Background Triangle" />
      </div>
      <div className="user-pick">
        <div className="user-pick__list">
          <div className="user-pick__list--item">
            <Pick
              imageSrc={IconPaper}
              type="Paper"
              handleClick={() => handlePick("Paper")}
            />
          </div>
          <div className="user-pick__list--item">
            <Pick
              imageSrc={IconScissors}
              type="Scissors"
              handleClick={() => handlePick("Scissors")}
            />
          </div>
          <div className="user-pick__list--item">
            <Pick
              imageSrc={IconRock}
              type="Rock"
              handleClick={() => handlePick("Rock")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
