//import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

//import api from '../../services/api';

import './styles.css';

function Landing() {
  //const [totalConnections, setTotalConnections] = useState(0);

  /*useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data; 

      setTotalConnections(total);
    })
  }, []);*/

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>O maior ecossistema de Nutrição do Brasil à sua disposição.</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"
        />

        <div className="buttons-container">
          <a href='/' className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </a>

          <a href='/' className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Atender
          </a>
        </div>

        <span className="total-connections">
          Total de 0 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing;