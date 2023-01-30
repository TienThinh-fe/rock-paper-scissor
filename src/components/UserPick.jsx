import BgTriangle from "../assets/bg-triangle.svg";
import IconPaper from "../assets/icon-paper.svg";
import IconRock from "../assets/icon-rock.svg";
import IconScissors from "../assets/icon-scissors.svg";

import { Pick } from "./Pick";

export function UserPick() {
  return (
    <>
      <div className="user-pick__background">
        <img src={BgTriangle} alt="Background Triangle" />
      </div>
      <div className="user-pick">
        <div className="user-pick__list">
          <div className="user-pick__list--item">
            <Pick imageSrc={IconPaper} type="Paper" />
          </div>
          <div className="user-pick__list--item">
            <Pick imageSrc={IconScissors} type="Scissors" />
          </div>
          <div className="user-pick__list--item">
            <Pick imageSrc={IconRock} type="Rock" />
          </div>
        </div>
      </div>
    </>
  );
}
