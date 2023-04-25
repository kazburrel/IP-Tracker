import React from "react";

export const Iframe = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
        }}>
        <iframe
          style={{
            width: "100%",
            height: "60vh",
          }}
          // width='100%'
          height='600'
          frameBorder={0}
          scrolling='no'
          marginHeight={0}
          marginWidth={0}
          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3%20kenyetta%20street%20uwani%20enugu%20nigeria+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'>
          <a href='https://www.maps.ie/distance-area-calculator.html'>
            measure area map
          </a>
        </iframe>
      </div>
    </div>
  );
};
