import Container from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { TProject } from "@/types/project.type";
import Image from "next/image";
import Link from "next/link";

// export const metadata = {
//   title: "Project Details",
//   description: "View details of a specific project",
// };

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://blog-website-backend-rho.vercel.app/api/project/${id}`
  );
  const data = await res.json();

  const project = (data?.data as TProject) || {};

  return (
    <Container>
      <div className="my-10 lg:my-16">
        <div className="flex flex-col sm:flex-row overflow-hidden bg-gray-600 rounded-lg shadow-lg shadow-main-light dark:bg-gray-800 p-2">
          <div className="rounded-lg p-2 lg:w-1/2 bg-white">
            <Image
              priority
              className="rounded-lg object-contain object-center w-full sm:h-[550px] h-60"
              src={project?.image}
              alt="Article"
              width={400}
              height={550}
            />
          </div>
          <div className="sm:p-4 p-2 lg:w-1/2 flex flex-col justify-between">
            <div className="space-y-3">
              <p className="block text-2xl font-semibold text-gray-50 dark:text-white">
                {project?.title}
              </p>
              <p className=" text-sm text-gray-100 dark:text-gray-400">
                {project?.description}
              </p>
              <div className="text-sm text-gray-100 dark:text-gray-400 space-y-3">
                <div className="space-y-2">
                  <strong className="font-medium">Technologies:</strong>
                  <ul className="flex flex-wrap gap-2">
                    {project?.technologies.map((tech, index) => (
                      <Badge className="bg-white text-main" key={index}>
                        {tech}
                      </Badge>
                    ))}{" "}
                  </ul>
                </div>
                <div className="space-y-2">
                  <strong className="font-medium mb-1">Features:</strong>
                  <ul className="list-disc ml-4 text-sm">
                    {project?.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}{" "}
                  </ul>
                </div>
                <p>
                  <strong className="font-medium">Live Link: </strong>
                  <Link
                    href={project?.live_link}
                    className="text-main"
                    target="_blank"
                  >
                    {project?.live_link}
                  </Link>
                </p>
                {project?.github_link && (
                  <p>
                    <strong className="font-medium">Git Repo: </strong>
                    <Link
                      href={project?.github_link}
                      className="text-main"
                      target="_blank"
                    >
                      {project?.github_link}
                    </Link>
                  </p>
                )}
                {project?.github_link_frontEnd && (
                  <p>
                    <strong className="font-medium">
                      Git Repo(FrontEnd):{" "}
                    </strong>
                    <Link
                      href={project?.github_link_frontEnd}
                      className="text-main"
                      target="_blank"
                    >
                      {project?.github_link_frontEnd}
                    </Link>
                  </p>
                )}
                {project?.github_link_backEnd && (
                  <p>
                    <strong className="font-medium">Git Repo(BackEnd): </strong>
                    <Link
                      href={project?.github_link_backEnd}
                      className="text-main"
                      target="_blank"
                    >
                      {project?.github_link_backEnd}
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetailsPage;
