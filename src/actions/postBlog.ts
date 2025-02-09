"use server";

export const postBlog = async (data: any) => {
  const res = await fetch("http://localhost:3500/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};
