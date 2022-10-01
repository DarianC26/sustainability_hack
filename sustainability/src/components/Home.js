import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CarbonDisplay from "./CarbonDisplay";
import "./Home.css";

function Home() {
  const containerStyle = {
    width: "80vw",
    height: "80vh",
    display: "flex",
  };

  const origin = { lat: 42.3505, lng: -71.1054 };
  const west = { lat: 42.3526, lng: -71.1203 };
  const east = { lat: 42.3497, lng: -71.1042 };

  return (
    <div className="grid-container">
      <div className="info-container">
        <div className="form">hi</div>
        <CarbonDisplay></CarbonDisplay>
      </div>

      <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyDZTp6fe2So-R5FEzo-w4synN9WjPaiMj4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={origin}
            zoom={15}
          >
            <Marker position={origin} />
            <Marker position={west} />
            <Marker position={east} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Home;
