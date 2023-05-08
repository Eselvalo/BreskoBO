import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 44.494887,
  lng: 11.342616,
};

const Map = ({ pubs, onMarkerClick }) => {
  const mapStyles = [
    // Your custom styles here
  ];

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
  };

  const filteredPubs = pubs;
    //.filter((pub) => pub.name.toLowerCase().includes('bar') || pub.name.toLowerCase().includes('pub'));


  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      options={options}
    >
      {filteredPubs.map((pub) => (
        <Marker
          key={pub.id}
          position={{ lat: pub.lat, lng: pub.lng }}
          onClick={(e) => {
            // e.preventDefault();
            onMarkerClick(pub);
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default React.memo(Map);
