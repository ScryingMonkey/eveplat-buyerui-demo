import React from 'react';
import './CtaButton.css';
import {Cta} from '../../types/_index';

export const CtaButton:React.FC<{
    cta: Cta;
}> = ({cta}) => {
    return (
        <div 
            className="cta-button"
            onClick={() => cta.clickHandler()}>
                {cta.label}
        </div>
    );
}