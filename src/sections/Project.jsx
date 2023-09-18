import { ProjectCard, ProjectCard2 } from "../components";
import { ProjectBackground } from "../components";

const Project = () => {
  return (
    <section className="max-container ">
      <ProjectBackground />
      <ProjectCard />
      <ProjectCard2 />
    </section>
  );
};

export default Project;
