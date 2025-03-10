"use server";

type TBlog = {
  title: string;
  image: string;
  description: string;
  content: string;
};

export const postBlog = async (data: TBlog) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

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

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
