import React, { useEffect, useState } from "react";
import Axios from "axios";
import L, { LatLngExpression } from "leaflet";
import { Locations } from "../Domain";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

export const Iframe = () => {
  const [ipDetails, setIpDetails] = useState<any>([]);
  const [lat, setLat] = useState(40.7123);
  const [lon, setLon] = useState(-74.0068);
 
  // Fetching the API once when the
  // component is mounted
  useEffect(() => {
    Axios.get("http://ip-api.com/json/").then(res => {
      setIpDetails(res.data);
      setLat(res.data.lat);
      setLon(res.data.lon);
        console.log(res.data);
    });
  }, []);

  const position: LatLngExpression = [lat,lon];
  const zoom: number = 20;

  return (
    <MapContainer
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
    </MapContainer>
  );
};
