import React from 'react'
import mapMarker from '../images/map-marker.svg'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/pages/orphMap.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mapIcon from '../utils/mapIcon'

function OrphMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt='Happy'/>
                    <h2>Escolha um Lugar no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong> Calgary </strong>
                    <span> Canada </span>
                </footer>
            </aside>
            <Map
              center={[51.0272883,-114.368013]}
              zoom={10}
              style={{
                  width: '100%', height: '100%'
                }}> 
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'>
                </TileLayer> 
                <Marker
                    icon={mapIcon}
                    position={[51.0272883,-114.368013]}>
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    Lar de todos
                    <Link to='/orph/1'>
                        <FiArrowRight size={32} color='#FFF' />
                    </Link>
                </Popup>

                </Marker>
                </Map>
            <Link to="/orph/create" className="create-orph">
                <FiPlus size={32} color="FFF"></FiPlus>
            </Link>
        </div>
    )
}

export default OrphMap;