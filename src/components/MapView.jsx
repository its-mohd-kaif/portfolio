import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Leaflet CSS

import "leaflet/dist/leaflet.css";

import locationImg from "../assets/location.png";
import { BiHome } from "react-icons/bi";

function MapView({ latitude, longitude }) {
  const position = [latitude, longitude];

  const customIcon = new L.Icon({
    iconUrl: locationImg, // Use the variable directly, without curly braces
    iconSize: [50, 50], // Replace with the size of your custom marker icon
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "300px", borderRadius: "8px", overflow: "hidden" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div className="glass-card d-flex align-items-center">
            <BiHome style={{ fontSize: "18px", marginRight: "3px" }} />
            <p style={{ flex: 1, margin: 0, marginTop: "3px" }}>My Home</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
