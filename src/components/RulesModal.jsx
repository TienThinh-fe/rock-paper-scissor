import { createPortal } from "react-dom";
import "./styles.scss";

import IconClose from "../assets/icon-close.svg";
import ImageRules from "../assets/image-rules.svg";

export function RulesModal({ onClose }) {
  return createPortal(
    <>
      <div className="rules-modal__overlay" onClick={onClose}></div>
      <div className="rules-modal">
        <div className="rules-modal__header">
          <span className="rules-modal__header--title">Rules</span>
          <span className="rules-modal__header--close" onClick={onClose}>
            <img src={IconClose} alt="Close" />
          </span>
        </div>
        <div className="rules-modal__body">
          <img src={ImageRules} alt="Rules" />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
