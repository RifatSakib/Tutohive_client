import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {


    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/21HYbNsp/course1.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Grab Your Course Soon!</h1>
      <Link className="btn btn-success" to="/find-tutors">Get My Course</Link>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    );
};

export default Hero;
