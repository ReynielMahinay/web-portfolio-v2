import { projectList } from "../constants";
import code_sage from "../assets/images/code-saga.png";

const ProjectCard = () => {
  return (
    <div
      className="bg-project max-sm:bg-project_mobile  bg-center bg-cover bg-no-repeat xl:min-h-screen max-sm: w-full p-10
       max-sm:p-0 max-sm:pl-7 max-sm:pt-7"
      id="project"
    >
      <div className=" w-full px-[130px] max-sm:px-0 pt-5 max-sm:pt-1 relative">
        <h3
          className="font-montserrat tracking-tight  font-black text-3xl text-black-gray relative
          max-sm:text-xl
        "
        >
          PROJECTS
        </h3>
      </div>

      <div
        className="bg-black-gray w-[60.5%] h-[15.3%]  absolute left-[180px] top-[1520px]
                     max-sm:w-[60%] max-sm:h-[8%] max-sm:left-[30px] max-sm:top-[1083px]
      "
      />
      <div className=" w-full pt-[60px] pl-[100px] max-sm:pl-[10px] relative">
        <img
          src={code_sage}
          alt="code saga"
          className="w-[70%] h-[50%] max-sm:h-[80%] max-sm:w-[70%] relative left-20 -top-5
           max-sm:left-1 max-sm:-top-10"
        />
        <a
          href="https://github.com/ReynielMahinay/code-saga"
          target="_blank"
          className="bg-black-gray font-montserrat font-semibold underline underline-offset-8
         text-semi-white absolute left-[180px] bottom-[20px] px-[20px] py-[20px] cursor-pointer
          max-sm:px-[0px] max-sm:py-[2px] max-sm:text-[10px] max-sm:bg-transparent max-sm:text-black-gray 
          max-sm:left-[255px] max-sm:bottom-[90px]
         "
        >
          VIEW PROJECT
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
