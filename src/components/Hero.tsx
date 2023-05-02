import { useEffect, useState, useContext} from "react";
import Axios from "axios";

import { storeCtx } from "../context/storeCtx";


export const Hero = () => {
  const storedCtx = useContext(storeCtx);

  // Setting up the initial state variables
  const [ipDetails, setIpDetails] = useState<any>([]);

  // Fetching the API once when the
  // component is mounted
  useEffect(() => {
    Axios.get("http://ip-api.com/json/").then(res => {
      setIpDetails(res.data);
      storedCtx?.setLat(res.data.lat);
      storedCtx?.setLon(res.data.lon);
    });
  }, []);


  return (
    <div
      className='hero w-75 mx-auto border text-center rounded-4 bg-white position-absolute bottom-0'
      style={{  
        marginBottom: "-50px", 
        zIndex: "2" }}>
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
