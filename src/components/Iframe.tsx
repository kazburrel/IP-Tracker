import React, { useContext} from "react";
import Axios from "axios";
import L, { LatLngExpression } from "leaflet";
import { Locations } from "../Domain";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { storeCtx } from "../context/storeCtx";

export const Iframe = () => {

    const storedCtx = useContext(storeCtx)
 
  // Fetching the API once when the
  // component is mounted
 
  
  //   const list: Locations[] = [
  //     {
  //       city: ipDetails.city,
  //       country: ipDetails.country,
  //       zip: ipDetails.zip,
  //       location: ipDetails.city,
  //       lat: ipDetails.lat,
  //       lon: ipDetails.lon,
  //     },
  //   ];
  //   useEffect();
  // Default coordinates set to Oslo central station
  const position: LatLngExpression = [storedCtx.lat,storedCtx.lon];
  console.log(position)
  const zoom: number = 20;

  return (
    <>
   {storedCtx.lon && <MapContainer
      style={{
        zIndex: "0",
        height: "60vh",
      }}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}>
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {
        // Placeholder, we'll put our markers here
      }
    </MapContainer>}
    </>
  );
};
