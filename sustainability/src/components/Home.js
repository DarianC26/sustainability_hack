/*global google*/
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import CarbonDisplay from "./CarbonDisplay";
import "./Home.css";

function Home() {
  const containerStyle = {
    width: "80vw",
    height: "87vh",
    display: "flex",
  };

  const central = { lat: 42.3505, lng: -71.1054 };
  const west = { lat: 42.3526, lng: -71.1203 };
  const east = { lat: 42.3497, lng: -71.1042 };

  const [origin, setOrigin] = useState(central);
  const [destination, setDestination] = useState(central);
  const [distance, setDistance] = useState(null)

  function handleValue(e) {
    switch (e.target.value) {
      case "1":
        setOrigin(central);
        break;
      case "2":
        setOrigin(west);
        break;
      case "3":
        setOrigin(east);
        break;
      default:
        setOrigin(central);
    }
  }

  function handleValue2(e) {
    switch (e.target.value) {
      case "1":
        setDestination(central);
        break;
      case "2":
        setDestination(west);
        break;
      case "3":
        setDestination(east);
        break;
      default:
        setDestination(central);
    }
  }

  const handleDirections = async (e) => {
    const directionServices = new google.maps.DirectionsService();
    const res = await directionServices.route({
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    console.log(res.routes[0].legs[0].distance.text);

    setDistance(res.routes[0].legs[0].distance.text);
  };

  return (
    <div className="grid-container">
      <div className="info-container">
        <div className="form">
          <select className="selection" onChange={handleValue}>
            <option value="1">Central</option>
            <option value="2">West</option>
            <option value="3">East</option>
          </select>

          <select className="selection2" onChange={handleValue2}>
            <option value="1">Central</option>
            <option value="2">West</option>
            <option value="3">East</option>
          </select>

          <button className="btn" onClick={handleDirections}>Click Me</button>
        </div>
        <div className="display">
          {distance && <CarbonDisplay distance={distance} />}
        </div>
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
