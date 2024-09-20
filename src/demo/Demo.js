import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Slider from "./Slider";

import "./Demo.css";
import Voucher from "./Voucher";
import useIsSmallScreen from "../hooks/useIsSmallScreen";

function Demo() {
  const isSmallScreen = useIsSmallScreen();
  console.log(isSmallScreen);
  return (
    <>
      {!isSmallScreen ? (
        <div className="parent">
          <div className="left-section">
            <Nav />
            <Hero />
            <Voucher />
          </div>
          <div className="right-section">
            <Slider />
          </div>
        </div>
      ) : (
        <div className="parent">
          <div className="left-section">
            <Nav />
            <Hero />
            <Slider />
            <Voucher />
          </div>
        </div>
      )}
    </>
  );
}

export default Demo;
