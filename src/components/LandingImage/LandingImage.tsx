import React, { useContext, CSSProperties } from "react";
import { AppContext } from "../../GlobalState";
import "./LandingImage.css";
import { auth } from "firebase";
import { WorkflowDnD } from "../WorkflowDnD/WorkflowDnD";

const LandingImage = () => {
  const { styles } = useContext(AppContext);

  const divStyle: CSSProperties = {
    backgroundImage: `url(${styles.images.endlesssbackground_wintertrees04})`,
    margin: "auto",
    backgroundSize: "cover",
    height: "50vh",
    textAlign: "center"
  };

  return (
    <div>
      LandingImage
      <div
        className="LandingImage-image animated-background"
        style={divStyle}
      />
      <WorkflowDnD />
    </div>
  );
};
export default LandingImage;
