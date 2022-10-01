import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Home.css";

function Home() {
  const containerStyle = {
    width: "80vw",
    height: "80vh",
    display: "flex",
  };

  const [origin, setOrigin] = useState({ lat: 42.3505, lng: -71.1054 });
  return (
    <div className="grid-container">
      <div className="info-container">
        <div className="form">hi</div>
        <div className="carbonDisplay">carbonDisplay</div>
      </div>

      <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyDZTp6fe2So-R5FEzo-w4synN9WjPaiMj4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={origin}
            zoom={15}
          >
            <Marker position={origin} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Home;
