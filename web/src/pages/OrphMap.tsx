import React from 'react'
import mapMarker from '../images/marker.svg'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/pages/orphMap.css'

function OrphMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt='Happy'/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong> Calgary </strong>
                    <span> Canada </span>
                </footer>
            </aside>
            <div></div>
            <Link to="" className="create-orph">
                <FiPlus size={32} color="FFF"></FiPlus>
            </Link>
        </div>
    )
}

export default OrphMap;