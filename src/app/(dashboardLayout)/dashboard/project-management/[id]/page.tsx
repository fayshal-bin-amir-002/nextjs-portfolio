import { TProject } from "@/types/project.type";

const UpdateProjectPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:3500/api/project/${id}`);
  const data = await res.json();
  const project = (data?.data as TProject) || {};
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default UpdateProjectPage;
