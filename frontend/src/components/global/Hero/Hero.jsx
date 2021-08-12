import { NavLink } from "react-router-dom";
import React from 'react';
import './Hero.scss';

const Hero = (props) => {

  return (
    <div className="hero" style={{backgroundImage: props.background}}>
      <div className="hero__content">
        <img src={props.background} alt="" />
        {props.title && <h2 className="hero__title">{props.title}</h2>}

        {props.entry && <div className="hero__entry">{props.entry}</div>}
        {props.btnText && props.btnPath && 
          <div className="hero__actions">
            <NavLink className="btn" to={props.btnPath}>{props.btnText}</NavLink>
          </div>
        }
      </div>
    </div>
  );
}

export default Hero;