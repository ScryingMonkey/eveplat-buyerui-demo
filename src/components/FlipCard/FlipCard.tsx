import React from "react";
import "./FlipCard.css";

const FlipCard: React.FC<{
  title: string;
  description: string;
  links?: { url: string; text: string }[];
}> = props => {
  return (
    <div className="cb-FlipCard">
      <div className="cb-FlipCard-inner">
        <FlipCardSummary title={props.title} className="cb-FlipCard-front" />
        <FlipCardDetail {...props} className="cb-FlipCard-back" />
      </div>
    </div>
  );
};
export default FlipCard;

const FlipCardDetail: React.FC<{
  className: string;
  title: string;
  description: string;
  links?: { url: string; text: string }[];
}> = ({ className, title, description, links }) => {
  return (
    <div className={`${className} cb-FlipCard-detail`}>
      <div className="cb-FlipCard-header">{title}</div>
      <div className="cb-FlipCard-content">{description}</div>
    </div>
  );
};
const FlipCardSummary: React.FC<{
  className: string;
  title: string;
}> = ({ className, title }) => {
  return <div className={`${className} cb-FlipCard-summary`}>{title}</div>;
};
