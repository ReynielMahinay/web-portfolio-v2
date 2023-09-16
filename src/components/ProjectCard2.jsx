import project_bg from "../assets/images/project2-bg.png";
import { projectList } from "../constants";

const ProjectCard2 = () => {
  return (
    <div>
      {projectList.map((project, index) => (
        <div
          className="bg-project2 max-sm:bg-project_mobile_2 max-sm:bg-cover bg-center bg-cover bg-no-repeat xl:min-h-screen w-full p-10
          max-sm:p-0 max-sm:pl-10 max-sm:pt-5 max-sm:pb-10"
          key={index}
        >
          <div
            className="bg-black-gray w-[60.5%] h-[13.5%] absolute left-[180px] bottom-[400px] 
            max-sm:w-[57%] max-sm:h-[6.5%] max-sm:left-[30px]  max-sm:bottom-[310px] "
          />
          <div>
            <img
              src={project.image}
              alt="project"
              className="w-[65%] h-[50%] relative top-[80px] left-[180px] 
              max-sm:top-[17px] max-sm:left-[2px]"
            />
            <a
              href="https://code-saga.vercel.app/"
              target="_blank"
              className="bg-black-gray font-montserrat font-semibold underline underline-offset-8
         text-semi-white absolute left-[220px] bottom-[440px] px-[20px] py-[20px] cursor-pointer
           max-sm:px-[0px] max-sm:py-[2px] max-sm:text-[10px] max-sm:bg-transparent max-sm:text-black-gray
           max-sm:left-[280px] max-sm:bottom-[365px]
         "
            >
              VIEW PROJECT
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard2;