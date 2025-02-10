"use server";

export const deleteBlog = async (id: string) => {
  const res = await fetch(
    `https://nextjs-portfolio-backend.vercel.app/api/blogs/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await res.json();
};
