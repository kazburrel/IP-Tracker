import React, { useEffect, useState } from "react";
// import { Hero } from "../components/Hero";
import Axios from "axios";
// export const Iframe = () => {
//   // Setting up the initial state variables
//   const [ipDetails, setIpDetails] = useState<any>([]);
//   const [lat, setLat] = useState("");
//   const [lon, setLon] = useState("");
//   // Fetching the API once when the
//   // component is mounted
//   useEffect(() => {
//     Axios.get("http://ip-api.com/json/").then(res => {
//       setIpDetails(res.data);
//       setLat(res.data.lat);
//       console.log(res.data.lon);
//       setLon(res.data.long);
//     });
//   }, [lat, lon]);
//   return (
    
//     <div>
//       <div
//         style={{
//           width: "100%",
//         }}>
//         <iframe
//           style={{
//             width: "100%",
//             height: "60vh",
//           }}
//           // width='100%'
//           height='600'
//           frameBorder={0}
//           scrolling='no'
//           marginHeight={0}
//           marginWidth={0}
//           id='iframe'
//           src ="https://www.openstreetmap.org/copyright">
//           <a href='https://www.maps.ie/distance-area-calculator.html'>
//             measure area map
//           </a>
//         </iframe>
        
//       </div>
//     </div>
//   );
// };
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

export  const Iframe = () => {
      const [ipDetails, setIpDetails] = useState<any>([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  // Fetching the API once when the
  // component is mounted
  useEffect(() => {
    Axios.get("http://ip-api.com/json/").then(res => {
      setIpDetails(res.data);
      setLat(res.data.lat);
      console.log(res.data.lon);
      setLon(res.data.long);
    });
  }, [lat, lon]);
  // Default coordinates set to Oslo central station
  const position: LatLngExpression = [59.91174337077401, 10.750425582038146];
  const zoom: number = 15;

  return (
    <MapContainer style={{
        height: '60vh',
        // marginTop: '25px'
    }} center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        // Placeholder, we'll put our markers here
      }
    </MapContainer>
  );
}