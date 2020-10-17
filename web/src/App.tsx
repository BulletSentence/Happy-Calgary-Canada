import React from 'react';
import './styles/global.css'
import './styles/pages/landing.css'
import logoImg from './images/Logo.svg'

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

          <a href='#' className='enter-app'>
           O
          </a>
      </div>
    </div>
  );
}

export default App;
