import { FocusCards } from "@/components/home/projects/FocusCards";
import Container from "@/components/shared/Container";

const ProjectsPage = async () => {
  const res = await fetch("http://localhost:3500/api/project");
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
