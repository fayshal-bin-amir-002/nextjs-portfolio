import Container from "@/components/shared/Container";

const ProjectsPage = async () => {
  const res = await fetch("http://localhost:3500/api/project");
  const data = await res.json();

  const projects = data?.data || [];

  console.log(projects);

  return (
    <Container>
      <p>Hello World!</p>
    </Container>
  );
};

export default ProjectsPage;
