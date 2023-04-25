import React from "react";

export const Hero = () => {
  return (
    <div
      className='w-75 mx-auto border text-center rounded-4 bg-white position-absolute bottom-0'
      style={{
        marginBottom: "-50px",
      }}>
      <div className='row py-4'>
        <div className='col-md-3 col-12 det'>
          <span className='text-muted'>IP Address</span> <br />
          <span className='fw-bold fs-5'>1u36524274627</span>
        </div>
        <div className='col-md-3 col-12 mt-md-0 mt-3 det'>
          <span className='text-muted'>location</span> <br />
          <span className='fw-bold fs-5'>Enugu, Nigeria</span> <br />
          <span className='fw-bold fs-5'>4000102</span>
        </div>
        <div className='col-md-3 col-12 mt-md-0 mt-3 det'>
          <span className='text-muted'>Timezone</span> <br />
          <span className='fw-bold fs-5'>UTC-05:00</span>
        </div>
        <div className='col-md-3 col-12 mt-md-0 mt-3'>
          <span className='text-muted'>ISP</span> <br />
          <span className='fw-bold fs-5'>SpaceX Starlink</span>
        </div>
      </div>
    </div>
  );
};
