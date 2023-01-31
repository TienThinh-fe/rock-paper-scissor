import { Pick } from "./Pick";

import IconPaper from "../assets/icon-paper.svg";
import IconRock from "../assets/icon-rock.svg";
import IconScissors from "../assets/icon-scissors.svg";

export function Result() {
  return (
    <div className="result" style={{ width: "64%" }}>
      <div className="result__you">
        <div className="result__you__title">You Picked</div>
        <div className="result__you__pick">
          <Pick imageSrc={IconScissors} type="Scissors" />
        </div>
        {/* <div className="result__you__overlay">
          <div className="result__you__overlay--item one"></div>
          <div className="result__you__overlay--item two"></div>
          <div className="result__you__overlay--item three"></div>
        </div> */}
      </div>
      <div className="result__show">
        <div className="result__show__title">You Lose</div>
        <div className="result__show__play-again">
          <span>Play Again</span>
        </div>
      </div>
      <div className="result__house">
        <div className="result__house__title">The House Picked</div>
        <div className="result__house__pick">
          <Pick imageSrc={IconRock} type="Rock" />
        </div>
        <div className="result__house__overlay">
          <div className="result__house__overlay--item one"></div>
          <div className="result__house__overlay--item two"></div>
          <div className="result__house__overlay--item three"></div>
        </div>
      </div>
    </div>
  );
}
