import React from "react";
import { BackgroundParticles } from "../components";
import Reveal from "../components/Reveal";

const Hero = () => {
  return (
    <div
      className=" relative max-container bg-hero max-sm:bg-hero_mobile max-sm:bg-center bg-center bg-no-repeat max-sm:bg-cover w-full xl:min-h-screen 
      overflow-hidden flex flex-row max-sm:flex-col flex-1 justify-center items-start pt-[110px] max-sm:pt-[0] max-sm:pl-3"
      id="home"
    >
      <BackgroundParticles />
      <div className=" w-full pr-8 max-sm:pr-0 relative ">
        <h1
          className="font-montserrat tracking-tight	 text-9xl max-sm:text-7xl 
        font-black flex flex-1 justify-end max-sm:justify-start max-sm:pl-5 max-sm:pt-[90px] text-black-gray"
        >
          HELLO
        </h1>
      </div>
      <div className="w-full pl-3 pt-[203px] max-sm:pt-[10px] max-sm:pl-6  relative">
        <h3 className="font-montserrat tracking-tight	 font-extrabold text-6xl max-sm:text-3xl text-black-gray">
          I'M REYNIEL <br /> MAHINAY
        </h3>
        <p
          className="font-extrabold tracking-tight	 text-4xl max-sm:text-xl 
        pt-[96px] max-sm:pt-5 text-black-gray "
        >
          FRONT-END DEVELOPER
        </p>
      </div>
    </div>
  );
};

export default Hero;
