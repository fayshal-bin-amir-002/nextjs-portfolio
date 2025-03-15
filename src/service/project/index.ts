"use server";

import { TProject } from "@/types/project.type";
import { revalidateTags } from "../revalidateTags";

export const getFeaturedProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/project/featured-projects`,
      {
        next: {
          tags: ["Featured-Projects"],
        },
        cache: "force-cache",
      }
    );
    const data = await res.json();
    const blogs = data?.data || [];

    return blogs;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/project`, {
      next: {
        tags: ["Projects"],
      },
      cache: "force-cache",
    });
    const data = await res.json();
    const blogs = data?.data || [];

    return blogs;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const postProject = async (payload: TProject) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    await revalidateTags(["Featured-Projects", "Projects"]);

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const updateProject = async (id: string, payload: TProject) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/project/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    await revalidateTags(["Featured-Projects", "Projects"]);

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const deleteProject = async (id: string) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/project/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await revalidateTags(["Featured-Projects", "Projects"]);

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
