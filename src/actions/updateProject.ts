"use server";

type TProject = {
  title?: string;
  image?: string;
  technologies?: string[];
  features?: string[];
  description?: string;
  isFeatured?: boolean;
  live_link?: string;
  github_link?: string;
  github_link_frontEnd?: string;
  github_link_backEnd?: string;
};

export const updateProject = async (id: string, data: TProject) => {
  const res = await fetch(`http://localhost:3500/api/project/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};
