"use server";

type TProject = {
  title: string;
  image: string;
  technologies: string[];
  features: string[];
  description: string;
  isFeatured: boolean;
  live_link: string;
  github_link?: string;
  github_link_frontEnd?: string;
  github_link_backEnd?: string;
};

export const createProject = async (data: TProject) => {
  try {
    const res = await fetch(
      "https://nextjs-portfolio-backend.vercel.app/api/project",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
