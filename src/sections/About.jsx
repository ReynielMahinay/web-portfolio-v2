import React from "react";
import profile from "../assets/images/profile.jpg";

const about = () => {
  return (
    <div
      className="bg-about max-sm:bg-about_mobile  bg-center bg-cover bg-no-repeat max-sm:bg-cover w-full 
       xl:min-h-screen overflow-hidden flex flex-row max-sm:flex-col pt-10 justify-center  "
      id="about"
    >
      <div className=" w-full flex flex-col items-end max-sm:items-start max-sm:h-[330px]">
        <h3 className="font-montserrat tracking-tight	 font-black text-3xl max-sm:text-xl  max-sm:pl-8 text-black-gray pb-10 relative">
          ABOUT
        </h3>
        <div
          className="bg-black-gray relative h-[76%] w-[62%] max-sm:w-[50%] max-sm:h-[63%]
         right-[59px] top-[40px] max-sm:left-7  max-sm:top-[10px]"
        />
        <div className="flex justify-start ">
          <img
            src={profile}
            alt="profile"
            className="w-[30%] h-[16.5%]  max-sm:w-[50%] max-sm:h-[13%] absolute top-[780px] left-[230px] max-sm:top-[380px] max-sm:left-[45px] "
          />
        </div>
      </div>
      <div className="w-full pt-[85px] max-sm:pt-[0px] pl-[30px]  pr-10 max-sm:pr-[30px] ">
        <p className="font-normal tracking-tight	h-[330px] w-[450px] max-sm:w-full max-sm:h-full text-xl max-sm:text-base text-black-gray  ">
          Based in Hagonoy, Bulacan The Philippines. I am a Graduate of a
          Bachelor of Science in Information Technology, Where our capstone
          project was chosen as the best capstone. It was a 2D RPG game, created
          using Unity with C# and I am one of the developers. But my real goal
          was to be a Front-end Developer with a passion for developing clean,
          attractive, and responsive with great functions websites.
        </p>
        <h3
          className="font-montserrat tracking-tight	 max-sm:pt-5
        font-black text-3xl max-sm:text-xl text-black-gray relative"
        >
          TECH
        </h3>
        <p className="font-montserrat font-semibold text-4xl max-sm:text-lg text-semi-white pt-3 leading-[50px]">
          <span className="bg-black-gray">HTML</span>{" "}
          <span className="bg-black-gray">CSS</span>{" "}
          <span className="bg-black-gray">JAVASCRIPT</span>{" "}
          <span className="bg-black-gray">C#</span> <br />
          <span className="bg-black-gray">REACT</span>{" "}
          <span className="bg-black-gray">TAILWIND</span>{" "}
          <span className="bg-black-gray">GIT</span>
        </p>
      </div>
    </div>
  );
};

export default about;
