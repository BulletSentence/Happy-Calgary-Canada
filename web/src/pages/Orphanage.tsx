import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from 'react-router-dom';
import '../styles/pages/orphanage.css';
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  id: number,
  latitude: number,
  longitude: number,
  about: string,
  name: string,
  instructions: string,
  opening_hours: string,
  open_on_weekends: string,
  images: Array<{
    url: string
    id: number;
  }>;
}

interface OrphParams {
  id: string;
}

export default function Orphanage() {
    const params = useParams<OrphParams>();
    const [orph, setOrph] = useState<Orphanage>();
    useEffect(() => {
        api.get(`orph/${params.id}`).then(response => {
            setOrph(response.data); 
        }) ;
    }, [params.id]);

    if (!orph) {
      return <p> Carregando...</p>
    }

  return (
    <div id="page-orphanage">
      <Sidebar/>
      <main>
        <div className="orphanage-details">
          <img src={orph.images[0].url} alt="Lar das meninas" />

          <div className="images">
            {orph.images.map(image => {
              return (
                <button key={image.id} className="active" type="button">
                  <img src={image.url} alt={orph.name} />
                </button>
              )
            })}
          </div>
          
          <div className="orphanage-details-content">
          <h1>{orph.name}</h1>
            <p>
              {orph.about}
            </p>
            <div className="map-container">
              <Map 
                center={[orph.latitude, orph.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                />
                <Marker interactive={false} icon={mapIcon} position={[orph.latitude, orph.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orph.latitude},${orph.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orph.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orph.opening_hours}
              </div>
              {orph.open_on_weekends ? (
                <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>
              ) : (
                <div className="open-on-weekends dont-open">
                <FiInfo size={32} color="#FF669D" />
                Não atendemos <br />
                fim de semana
              </div>
              ) }
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}