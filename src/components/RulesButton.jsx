import { useState } from "react";
import { RulesModal } from "./RulesModal";

export function RulesButton() {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <div className="rules-button" onClick={() => setShowRules(true)}>
        <span>Rules</span>
      </div>
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </>
  );
}
