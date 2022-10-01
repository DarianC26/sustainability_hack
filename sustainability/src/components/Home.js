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

  const central = { lat: 42.3505, lng: -71.1054 };
  const west = { lat: 42.3526, lng: -71.1203 };
  const east = { lat: 42.3497, lng: -71.1042 };

  const [origin, setOrigin] = useState("1");
  const [destination, setDestination] = useState("1");

  function handleValue(e) {
    setOrigin(e.target.value);
  }

  function handleValue2(e) {
    setDestination(e.target.value);
  }

  function testCon() {
    console.log(origin, destination);
  }

  

  return (
    <div className="grid-container">
      <div className="info-container">
        <div className="form">
          <select id="selection" onChange={handleValue}>
            <option value="1">Central</option>
            <option value="2">West</option>
            <option value="3">East</option>
          </select>

          <select id="selection2" onChange={handleValue2}>
            <option value="1">Central</option>
            <option value="2">West</option>
            <option value="3">East</option>
          </select>

          <button onClick={testCon}>Click Me</button>
        </div>
        <CarbonDisplay></CarbonDisplay>
      </div>

      <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyDZTp6fe2So-R5FEzo-w4synN9WjPaiMj4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={central}
            zoom={15}
          >
            <Marker position={central} />
            <Marker position={west} />
            <Marker position={east} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Home;
