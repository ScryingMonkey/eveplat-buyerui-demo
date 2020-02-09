import React from "react";
import "./TileButton.css";

export const TileButton: React.FC<{
  label: string;
  clickHandler: () => void;
  img?: any;
}> = ({ label, clickHandler, img }) => {
  const imgstyle = {
    background: "#ffffff url(" + img + ") no-repeat",
    backgroundSize: "contain"
  };
  return (
    <div className="TileButton" style={imgstyle} onClick={() => clickHandler()}>
      {label}
    </div>
  );
};
