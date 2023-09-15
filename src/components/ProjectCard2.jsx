import project_bg from "../assets/images/project2-bg.png";
import { projectList } from "../constants";

const ProjectCard2 = () => {
  return (
    <div>
      {projectList.map((project, index) => (
        <div
          className="bg-project2 bg-center bg-cover bg-no-repeat xl:min-h-screen w-full p-10 "
          key={index}
        >
          <div className="bg-black-gray w-[60.5%] h-[15%] absolute left-[180px] bottom-[100px]" />
          <div>
            <img
              src={project.image}
              alt="project"
              className="w-[65%] h-[50%] relative top-[80px] left-[180px]"
            />
            <a
              href="https://code-saga.vercel.app/"
              target="_blank"
              className="bg-black-gray font-montserrat font-semibold underline underline-offset-8
         text-semi-white absolute left-[220px] bottom-[140px] px-[20px] py-[20px] cursor-pointer"
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
