import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/bgg.png";
import appStore from "../../assets/apple.png";  // Add the correct path
import playStore from "../../assets/playstore.png"; // Add the correct path

const Hero = () => {
  return (
    <div
      className="relative w-full my-16 border border-red-500 h-[100vh] md:h-[50vh]"
      
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          height: "100%", // Fills parent div (50vh)
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="mb-5 text-3xl md:text-5xl font-bold">We Are Now Available on</h1>

        {/* App Store and Play Store Buttons */}
        <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
          <div className= "flex gap-2 bg-black p-4 rounded-xl">

            <img src={appStore} alt="App Store" className="h-12" />

            <div>

              <p>
                Download on the
              </p>
              <p>App Store</p>
            </div>

          </div>


          <div className="flex gap-2 bg-black p-4 rounded-xl">

            <img src={playStore} alt="Google Play" className="h-12" />

            <div>

              <p>
                Download on the
              </p>
              <p>Play Store</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
