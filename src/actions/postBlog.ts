"use server";

type TBlog = {
  title: string;
  image: string;
  description: string;
  content: string;
};

export const postBlog = async (data: TBlog) => {
  const res = await fetch("http://localhost:3500/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};
