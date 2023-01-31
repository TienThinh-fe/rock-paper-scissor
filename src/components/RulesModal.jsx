import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { useEffect } from "react";

import IconClose from "../assets/icon-close.svg";
import ImageRules from "../assets/image-rules.svg";

export function RulesModal({ onClose }) {
  useEffect(() => {
    gsap.from(".rules-modal", {
      duration: 0.5,
      scale: 0.2,
      ease: "circ.out",
    });

    gsap.to(".rules-modal", {
      scale: 1,
    });
  }, []);

  function handleClose() {
    gsap.to(".rules-modal", {
      duration: 0.5,
      scale: 0,
      onComplete: onClose,
    });
  }

  return createPortal(
    <>
      <div className="rules-modal__overlay" onClick={handleClose}></div>
      <div className="rules-modal">
        <div className="rules-modal__header">
          <span className="rules-modal__header--title">Rules</span>
          <span className="rules-modal__header--close" onClick={handleClose}>
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
