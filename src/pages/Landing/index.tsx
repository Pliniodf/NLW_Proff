import React from "react";

import logoImg from '../../assets/images/logo@3x.png'
import landingImg from '../../assets/images/landing@3x.png'

import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import purpleHeartIcon from '../../assets/images/icons/heart.png'

import './style.css'

function Landing(){
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="LogoProffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões ja realizadas <img src={purpleHeartIcon} alt="coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing;