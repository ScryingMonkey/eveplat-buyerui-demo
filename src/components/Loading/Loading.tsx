import React from "react";
import "./Loading.css";

const Loading = () => {
  return (<div>
  {/* <div className="wrapper">
    <span className="box circle farleft"></span>
    <span className="box bracket"></span> */}
    <div className="loading-label">
      Loading
    </div>
    {/* <span className="box bracket"></span>
    <span className="box circle farright"></span>
  </div> */}
  
  <div className="wrapper">
    <span className="box circle farleft"></span>
    <span className="box circle left"></span>
    <span className="box circle center"></span>
    <span className="box circle right"></span>
    <span className="box circle farright"></span>
  </div>
</div>);
};
export default Loading;


const html = () => {
  return (
  <div>
    {/* <div className="wrapper">
      <span className="box circle farleft"></span>
      <span className="box bracket"></span> */}
      <div className="loading-label">
        Loading
      </div>
      {/* <span className="box bracket"></span>
      <span className="box circle farright"></span>
    </div> */}
    
    <div className="wrapper">
      <span className="box circle farleft"></span>
      <span className="box circle left"></span>
      <span className="box circle center"></span>
      <span className="box circle right"></span>
      <span className="box circle farright"></span>
    </div>
  </div>
  );
}