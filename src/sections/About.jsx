import React from "react";
import profile from "../assets/images/profile.jpg";

const about = () => {
  return (
    <div
      className="bg-about bg-center bg-cover bg-no-repeat max-sm:bg-cover w-full  xl:min-h-screen overflow-hidden flex pt-10 justify-center "
      id="about"
    >
      <div className=" w-full flex flex-col items-end ">
        <h3 className="font-montserrat tracking-tight	 font-bold text-3xl text-black-gray pb-10">
          ABOUT
        </h3>
        <div className="bg-black-gray relative h-[54%] w-[42%] right-[70px] top-[150px]" />
        <div className="flex justify-end ">
          <img
            src={profile}
            alt="profile"
            className="w-[20%] h-[25%] absolute bottom-[100px] left-[350px]"
          />
        </div>
      </div>
      <div className="w-full pt-[85px] pl-10  pr-10">
        <p className="font-normal tracking-tight	 text-xl text-black-gray  ">
          Based in Hagonoy, Bulacan The Philippines. I am a Graduate of a
          Bachelor of Science in Information Technology, Where our capstone
          project was chosen as the best capstone. It was a 2D RPG game, created
          using Unity with C# and I am one of the developers. But my real goal
          was to be a Front-end Developer with a passion for developing clean,
          attractive, and responsive with great functions websites.
        </p>
      </div>
    </div>
  );
};

export default about;
