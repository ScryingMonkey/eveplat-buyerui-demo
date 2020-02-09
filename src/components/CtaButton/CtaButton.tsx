import React from "react";
import "./CtaButton.css";

export const CtaButton: React.FC<{
  label: string;
  clickHandler: () => void;
}> = ({ label, clickHandler }) => {
  return (
    <div className="cta-button" onClick={() => clickHandler()}>
      {label}
    </div>
  );
};
