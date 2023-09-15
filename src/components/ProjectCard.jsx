import { projectList } from "../constants";
import code_sage from "../assets/images/code-saga.png";

const ProjectCard = () => {
  return (
    <div
      className="bg-project bg-center bg-cover bg-no-repeat xl:min-h-screen w-full p-10 "
      id="project"
    >
      <div className=" w-full px-[130px] pt-5 relative">
        <h3 className="font-montserrat tracking-tight font-black text-3xl text-black-gray relative">
          PROJECTS
        </h3>
      </div>

      <div className="bg-black-gray w-[60.5%] h-[17%] absolute left-[180px] top-[1520px]" />
      <div className=" w-full pt-[60px] pl-[100px] relative">
        <img
          src={code_sage}
          alt="code saga"
          className="w-[70%] h-[50%] relative left-20 -top-5"
        />
        <a
          href="https://github.com/ReynielMahinay/code-saga"
          target="_blank"
          className="bg-black-gray font-montserrat font-semibold underline underline-offset-8
         text-semi-white absolute left-[180px] bottom-[20px] px-[20px] py-[20px] cursor-pointer"
        >
          VIEW PROJECT
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
