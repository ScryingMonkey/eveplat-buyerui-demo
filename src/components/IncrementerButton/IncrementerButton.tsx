import React from "react";
import "./IncrementerButton.css";

const IncrementerButton: React.FC<{
  value: number;
  upfunc: () => any;
  downfunc: () => any;
}> = props => {
  const up = "+";
  const down = "-";

  return (
    <div className="IncrementerButton">
      <div onClick={props.downfunc} className="button down">
        {down}
      </div>
      <div className="value">{props.value}</div>
      <div onClick={props.upfunc} className="button up">
        {up}
      </div>
    </div>
  );
};
export default IncrementerButton;
