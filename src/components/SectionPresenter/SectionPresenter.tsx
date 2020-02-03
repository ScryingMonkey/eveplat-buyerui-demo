import React, {createContext, useState} from "react";
import {Section} from '../../types/_index';
import './SectionPresenter.css';
import {CtaButton} from '../_index';

const SectionPresenter:React.FC<{
    section:Section;
    key:Number;
}> = ({section}) => {
    const [styles,setStyles] =  useState({});

    const setBackgroundImage = (path:string) => {
        setStyles({...styles, backgroundImage:`url(${path})`});
    }

    return (
      <div 
        className='section-layout ' 
        style={styles} >
        <div className="section-title " >
            {section.title}
        </div> 

        {(section.image) ? (
        <img 
            className="section-image"
            src={section.image} />
        ) : ( null )}

        <div className="section-blurb" >
            {section.blurb} 
        </div>
        
        {(section.cta) ? (
        <div className="section-cta">
            <CtaButton cta={section.cta} />
        </div>
        ) : ( null )}

        {/* <img src={section.image} /> */}

      </div>
    );
};
export default SectionPresenter;