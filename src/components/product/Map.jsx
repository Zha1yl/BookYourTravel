import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const position = [42.8746, 74.5698];
  return (
    <div>
      <h2 className="mapHeader">Contact us</h2>
      <div className="map-wrapper">
        <div className="map">
          <MapContainer center={position} zoom={13} className="map-container">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Our location.</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="contactMap">
          <p className="phone">+996507726757</p>
          <p className="mail">jadooTour@gmail.com</p>
          <p className="onMap">str.B.Beishenalieva:27</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
