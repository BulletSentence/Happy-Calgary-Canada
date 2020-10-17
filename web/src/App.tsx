import React from 'react';
import './styles/global.css'
import './styles/pages/landing.css'
import logoImg from './images/Logo.svg'
import {FiArrowRight} from 'react-icons/fi'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
          <img src={logoImg} alt=""/>

          <main>
            <h1>Bring happiness to the world</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>

          <div className="location">
            <strong> Calgary </strong>
            <span> Canada </span>
          </div>

          <a href='www.google.com' className='enter-app'>
           <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
          </a>
      </div>
    </div>
  );
}

export default App;
