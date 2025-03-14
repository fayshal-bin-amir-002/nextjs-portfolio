"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TProject } from "@/types/project.type";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import UpdateProjectModal from "./UpdateProjectModal";
import Swal from "sweetalert2";
import { deleteProject } from "@/service/project";

const ProjectCard = ({ project }: { project: TProject }) => {
  const handleDeleteProject = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteProject(id);
          if (res?.success) {
            Swal.fire({
              title: "Deleted!",
              text: res?.message,
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: res?.message,
              icon: "error",
            });
          }
        } catch (err: any) {
          Swal.fire({
            title: "Error!",
            text: err?.message,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white rounded shadow-md sm:flex-row text-slate-500 shadow-main-light relative gap-6 h-full">
      <figure className="w-full lg:w-1/3">
        <Image
          priority
          width={300}
          height={280}
          src={project.image}
          alt="project image"
          className="object-top object-cover w-full h-[300px] lg:h-[450px]"
        />
      </figure>

      <div className="lg:w-2/3 p-6 sm:mx-6 sm:px-0 space-y-3">
        <p className="text-xl">
          <strong className="font-medium">Title:</strong> {project?.title}
        </p>
        <p>
          <strong className="font-medium">Description:</strong>{" "}
          {project?.description.slice(0, 100)}...
        </p>
        <div>
          <strong className="font-medium mb-1">Technologies:</strong>
          <ul className="flex flex-wrap gap-2">
            {project?.technologies.map((tech, index) => (
              <Badge key={index}>{tech}</Badge>
            ))}{" "}
          </ul>
        </div>
        <div>
          <strong className="font-medium mb-1">Features:</strong>
          <ul className="list-disc ml-4 text-sm">
            {project?.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}{" "}
          </ul>
        </div>
        <p>
          <strong className="font-medium">Live Link: </strong>
          <Link href={project?.live_link} className="text-main" target="_blank">
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
            <strong className="font-medium">Git Repo(FrontEnd): </strong>
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
      <div className="flex flex-col gap-2 absolute right-1 top-1">
        <UpdateProjectModal project={project} />
        <Button
          onClick={() => handleDeleteProject(project?._id)}
          size={"icon"}
          className="bg-red-500"
        >
          <Trash2 color="white" strokeWidth={3} />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
