import ProjectCard from "@/components/dashboard/project/ProjectCard";
import { Button } from "@/components/ui/button";
import { TProject } from "@/types/project.type";
import Link from "next/link";

const ProjectManagementPage = async () => {
  const res = await fetch("http://localhost:3500/api/project");
  const data = await res.json();
  const projects = (data?.data as TProject[]) || [];

  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <p className="text-2xl font-medium">My Projects</p>
        <Link href="/dashboard/project-management/add-project">
          <Button variant="outline">Add New Project</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 2xl:grid-cols-2 my-8 lg:my-10">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectManagementPage;
