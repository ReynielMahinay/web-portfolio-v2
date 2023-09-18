import { projectList } from "../constants";
import Reveal from "./Reveal";
const ProjectCard2 = () => {
  return (
    <div>
      {projectList.map((project, index) => (
        <div
          className="max-container xl:min-h-screen w-full pt-10 max-sm:p-0 max-sm:pl-10 max-sm:pt-5 max-sm:pb-10"
          key={index}
        >
          <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative top-[85px] -left-[24px]" />

          <Reveal>
            <div className=" w-full ">
              <img
                src={project.image}
                alt="project"
                className="w-[70%] h-[80%] max-sm:w-[70%] max-sm:h-[75%] relative top-[80px] left-[200px] 
              max-sm:top-[17px] max-sm:left-[2px] "
              />

              <a
                href="https://code-saga.vercel.app/"
                target="_blank"
                className=" font-montserrat font-semibold hover:underline underline-offset-8
              text-black-gray relative left-[240px] -bottom-[38px] px-[20px] py-[20px] cursor-pointer
                max-sm:px-[0px] max-sm:py-[2px] max-sm:text-[10px] max-sm:bg-transparent max-sm:text-black-gray
                max-sm:left-[245px] max-sm:bottom-[70px]
                "
              >
                VIEW PROJECT
              </a>
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard2;
