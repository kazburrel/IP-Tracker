import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

export const Hero = () => {
  // Setting up the initial state variables
  const [ipDetails, setIpDetails] = useState<any>([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  // Fetching the API once when the
  // component is mounted
  useEffect(() => {
    Axios.get("http://ip-api.com/json/").then(res => {
      setIpDetails(res.data);
      setLat(res.data.lat);
      setLon(res.data.long);
    });
  }, []);

  return (
    <div
      className='hero w-75 mx-auto border text-center rounded-4 bg-white position-absolute bottom-0'
      style={{
        marginBottom: "-50px",
        zIndex: 25
      }}>
      <div className='row py-4'>
        <div className='col-md-3 col-12 det'>
          <span className='text-muted'>IP Address</span> <br />
          <span className='fw-bold fs-5'>{ipDetails.query}</span>
        </div>
        <div className='col-md-3 col-12 mt-md-0 mt-3 det'>
          <span className='text-muted'>location</span> <br />
          <span className='fw-bold fs-5'>
            {ipDetails.city}
            {","} {ipDetails.country}
          </span>
          <br />
          <span className='fw-bold fs-5'>{ipDetails.zip}</span>
        </div>
        <div className='col-md-3 col-12 mt-md-0 mt-3 det'>
          <span className='text-muted'>Timezone</span> <br />
          <span className='fw-bold fs-5'>{ipDetails.timezone}</span>
        </div>
        <div className='col-md-3 col-12 mt-md-0 mt-3'>
          <span className='text-muted'>ISP</span> <br />
          <span className='fw-bold fs-5'>{ipDetails.isp}</span>
        </div>
      </div>
    </div>
  );
};
