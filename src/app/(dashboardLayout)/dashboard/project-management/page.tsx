import { Button } from "@/components/ui/button";

const ProjectManagementPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium">My Projects</p>
        <Button variant="outline">Add New Project</Button>
      </div>
    </div>
  );
};

export default ProjectManagementPage;
