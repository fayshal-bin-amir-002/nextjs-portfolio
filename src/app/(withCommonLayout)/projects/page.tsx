import { FocusCards } from "@/components/home/projects/FocusCards";
import Container from "@/components/shared/Container";
import { getAllProjects } from "@/service/project";
import { TProject } from "@/types/project.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fayshal Bin Amir | Web Developer | Projects",
  description:
    "Portfolio of Fayshal Bin Amir, a passionate web developer skilled in React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose and modern web technologies.",
  keywords:
    "Fayshal Bin Amir, Web Developer, React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose, MERN, Full Stack, Portfolio",
};

const ProjectsPage = async () => {
  const projects = ((await getAllProjects()) as TProject[]) || [];

  return (
    <Container>
      <div className="my-10 lg:my-16">
        <FocusCards cards={projects} />
      </div>
    </Container>
  );
};

export default ProjectsPage;
