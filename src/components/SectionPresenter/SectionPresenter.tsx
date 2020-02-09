import React, { useState, useContext } from "react";
import "./SectionPresenter.css";
import { CtaButton } from "../_index";
import { AppContext } from "../../GlobalState";
import { Section } from "../../types/_index";

const SectionPresenter = () => {
  const { sections } = useContext(AppContext).screens.home;
  const [styles, setStyles] = useState({});

  const setBackgroundImage = (path: string) => {
    setStyles({ ...styles, backgroundImage: `url(${path})` });
  };

  return (
    <div className="">
      {sections.map((section, i) => (
        <SectionView section={section} key={i} />
      ))}
    </div>
  );
};
export default SectionPresenter;

const SectionView: React.FC<{
  section: Section;
  key: Number;
}> = ({ section }) => {
  const [styles, setStyles] = useState({});

  //TODO: Make setBackgroundImage work.
  // const setBackgroundImage = (path: string) => {
  //   setStyles({ ...styles, backgroundImage: `url(${path})` });
  // };
  return (
    <div className="section-layout " style={styles}>
      <div className="section-title ">{section.title}</div>

      {section.image ? (
        <img
          className="section-image"
          src={section.image}
          alt={`${section.image}`}
        />
      ) : null}

      <div className="section-blurb">{section.blurb}</div>

      {section.cta ? (
        <div className="section-cta">
          <CtaButton
            label={section.cta.label}
            clickHandler={section.cta.clickHandler}
          />
        </div>
      ) : null}

      {/* <img src={section.image} /> */}
    </div>
  );
};
