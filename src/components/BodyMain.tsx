import React from "react";
import { Iframe } from "./Iframe";
import { Row } from "react-bootstrap";
import { Hero } from "./Hero";
import { Search } from "./Search";

export const BodyMain = () => {
  return (
    <>
      <div
        className='d-flex flex-column justify-content-center  align-items-center position-relative'
        style={{
          height: "40vh",
          backgroundImage: 'url("/images/pattern-bg-desktop.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
       <Search/>
        <Hero />
      </div>

      <Iframe />
    </>
  );
};
