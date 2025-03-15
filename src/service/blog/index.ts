"use server";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs`, {
      next: {
        tags: ["Blogs"],
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

export const getABlog = async (id: string) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs/${id}`, {
      cache: "force-cache",
    });
    const data = await res.json();
    const blog = data?.data || null;

    return blog;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const postBlog = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    revalidateTag("Blogs");

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const deleteBlog = async (id: string) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("Blogs");

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const updateBlog = async (id: string, data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    revalidateTag("Blogs");

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
