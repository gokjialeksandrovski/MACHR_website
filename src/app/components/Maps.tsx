import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Maps: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const customPin = new L.Icon({
    iconUrl: '/icons/google-maps-pin.png',
    iconSize: [30, 30],
    iconAnchor: [0, 28],
    popupAnchor: [0, -38],
  });

  const position: [number, number] = [41.9988, 21.4526];

  if (!isClient) {
    return null;
  }

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={16} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customPin}>
          <Popup>
            <strong>Гази Баба, Скопје</strong>
            <br />
            XFX3+G2G, Бул. Александар Македонски, Скопје 1000,
            <br />
            Хотел Континентал
          </Popup>
        </Marker>
      </MapContainer>

      <div className="location-label">
        <h4>Гази Баба, Скопје</h4>
        <p>
          XFX3+G2G, Бул. Александар Македонски, Скопје 1000, Хотел Континентал
        </p>
      </div>

      <div className="directions-button-container">
        <a
          href="https://www.google.com/maps/dir/42.0033,21.3966/Hotel+Continental,+Boulevard+Alexander+the+Great,+Skopje/@42.0062874,21.4039863,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x135415986f9f2cd7:0x61669f4d3a9aa58c!2m2!1d21.452573!2d41.9988318!3e0?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          {' '}
          <button>Насоки</button>
        </a>
      </div>
    </div>
  );
};

export default Maps;
