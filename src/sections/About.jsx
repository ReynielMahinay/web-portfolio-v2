import React from "react";
import profile from "../assets/images/profile.jpg";
import Reveal from "../components/Reveal";

const about = () => {
  return (
    <div
      className="max-container bg-about max-sm:bg-about_mobile bg-center bg-cover bg-no-repeat max-sm:bg-cover w-full 
       xl:min-h-screen overflow-hidden flex flex-1 flex-row max-sm:flex-col  justify-center  "
      id="about"
    >
      <div className=" w-full flex flex-col items-end max-sm:items-start max-sm:h-[330px] pt-3 max-sm:pt-9 ">
        <Reveal>
          <h3 className="font-montserrat tracking-tight	 font-black text-3xl max-sm:text-xl pr-3 max-sm:pl-10 text-black-gray pb-10 relative">
            ABOUT
          </h3>
        </Reveal>
        <div className="relative max-sm:pl-7 pl-[90px]">
          <Reveal width="100%">
            <img
              src={profile}
              alt="profile"
              className="w-[85%] h-[60%] max-sm:w-[60%] max-sm:h-[50%] border-b-[20px] border-l-[20px]
               border-black-gray max-sm:ml-3 
            "
            />
          </Reveal>
        </div>
      </div>
      <div className="w-full pt-[85px] max-sm:pt-[0px] pl-[30px]   max-sm:pr-[30px]">
        <Reveal>
          <p
            className="font-normal tracking-tight	h-[330px] w-[450px] max-sm:w-full max-sm:ml-3
        max-sm:h-full text-xl max-sm:text-base text-black-gray  "
          >
            Based in Hagonoy, Bulacan The Philippines. I am a Graduate of a
            Bachelor of Science in Information Technology, Where our capstone
            project was chosen as the best capstone. It was a 2D RPG game,
            created using Unity with C# and I am one of the developers. But my
            real goal was to be a Front-end Developer with a passion for
            developing clean, attractive, and responsive with great functions
            websites.
          </p>
        </Reveal>

        <Reveal>
          <h3
            className="font-montserrat tracking-tight	 max-sm:pt-5
        font-black text-3xl max-sm:text-xl text-black-gray relative max-sm:pl-3"
          >
            TECH
          </h3>
        </Reveal>

        <Reveal>
          <p className="font-montserrat font-semibold text-4xl max-sm:text-lg max-sm:pl-3 text-semi-white pt-3 leading-[50px]">
            <span className="bg-black-gray">HTML</span>{" "}
            <span className="bg-black-gray">CSS</span>{" "}
            <span className="bg-black-gray">JAVASCRIPT</span>{" "}
            <span className="bg-black-gray">C#</span> <br />
            <span className="bg-black-gray">REACT</span>{" "}
            <span className="bg-black-gray">TAILWIND</span>{" "}
            <span className="bg-black-gray">GIT</span>
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default about;
