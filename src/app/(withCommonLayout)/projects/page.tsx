import { FocusCards } from "@/components/home/projects/FocusCards";
import Container from "@/components/shared/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fayshal Bin Amir | Web Developer | Projects",
  description:
    "Portfolio of Fayshal Bin Amir, a passionate web developer skilled in React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose and modern web technologies.",
  keywords:
    "Fayshal Bin Amir, Web Developer, React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose, MERN, Full Stack, Portfolio",
};

const ProjectsPage = async () => {
  const res = await fetch(
    "https://nextjs-portfolio-backend.vercel.app/api/project"
  );
  const data = await res.json();

  const projects = data?.data || [];

  return (
    <Container>
      <div className="my-10 lg:my-16">
        <FocusCards cards={projects} />
      </div>
    </Container>
  );
};

export default ProjectsPage;
