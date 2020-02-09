import React, { useEffect } from "react";
import "./FlipCard.css";
import { Link } from "react-router-dom";

const FlipCard: React.FC<{
  title: string;
  description: string;
  backgroundImage?: string;
  links?: { url: string; text: string }[];
}> = props => {
  return (
    //TODO: Need to include images in event cards
    <div className="cb-FlipCard">
      <div className="cb-FlipCard-inner">
        {props.backgroundImage ? (
          <FlipCardSummaryWithImage
            title={props.title}
            backgroundImage={props.backgroundImage}
            className="cb-FlipCard-front"
          />
        ) : (
          <FlipCardSummaryWithoutImage
            title={props.title}
            className="cb-FlipCard-front"
          />
        )}
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
      {links ? <FlipCardLinks links={links} /> : null}
    </div>
  );
};
const FlipCardSummaryWithoutImage: React.FC<{
  className: string;
  title: string;
}> = ({ className, title }) => {
  return <div className={`${className} cb-FlipCard-summary`}>{title}</div>;
};
const FlipCardSummaryWithImage: React.FC<{
  className: string;
  title: string;
  backgroundImage: string;
}> = ({ className, title, backgroundImage }) => {
  return <div className={`${className} cb-FlipCard-summary`}>{title}</div>;
};

const FlipCardLinks: React.FC<{ links: { url: string; text: string }[] }> = ({
  links
}) => {
  return (
    <div className="cb-FlipCard-link-container">
      {links.map((l: any, i: number) => (
        <Link to={l.url} className="cb-FlipCard-link" key={i}>
          {l.text}
        </Link>
      ))}
    </div>
  );
};
