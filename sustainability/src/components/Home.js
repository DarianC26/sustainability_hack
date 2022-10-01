import React, {useState, useEffect} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Home.css';

function Home() {
    const containerStyle = {
        width: '800px',
        height: '400px'
      };
      
      const center = {
        lat: 42.3505,
        lng: -71.1054
      };
    
      return (
        <LoadScript googleMapsApiKey="AIzaSyDZTp6fe2So-R5FEzo-w4synN9WjPaiMj4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}>

            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      )
}

export default Home