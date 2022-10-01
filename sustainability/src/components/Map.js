import { React } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

function MapContainer(props) {
  const coords = {
    lat: 42.35,
    lng: -71.1,
  };
  return (
    <Map
      containerStyle={cStyle}
      google={props.google}
      initialCenter={coords}
      zoom={14}
    ></Map>
  );
}

const cStyle = {
  width: "100%",
  height: "80%",
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDZTp6fe2So-R5FEzo-w4synN9WjPaiMj4",
})(MapContainer);
