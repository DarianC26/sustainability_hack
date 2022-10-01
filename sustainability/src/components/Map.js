import { React, Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MapContainer(props) {
  const coords = {
    lat: 42.35,
    lng: -71.1,
  };
  return <Map google={props.google} initialCenter={coords} zoom={14}></Map>;
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDZTp6fe2So-R5FEzo-w4synN9WjPaiMj4",
})(MapContainer);
