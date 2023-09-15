import React from "react";
import { BackgroundParticles } from "../components";

const Hero = () => {
  return (
    <div
      className="bg-hero bg-center bg-cover bg-no-repeat max-sm:bg-cover w-full xl:min-h-screen overflow-hidden flex flex-1 justify-center items-start pt-[90px]"
      id="home"
    >
      <BackgroundParticles />
      <div className=" w-full pr-10">
        <h1 className="font-montserrat tracking-tight	 text-9xl font-black flex flex-1 justify-end text-black-gray">
          HELLO
        </h1>
      </div>
      <div className="w-full pt-[222px]  ">
        <h3 className="font-montserrat tracking-tight	 font-extrabold text-6xl text-black-gray">
          I'M REYNIEL <br /> MAHINAY
        </h3>
        <p className="font-extrabold tracking-tight	 text-4xl pt-[80px] text-black-gray  ">
          FRONT-END DEVELOPER
        </p>
      </div>
    </div>
  );
};

export default Hero;
