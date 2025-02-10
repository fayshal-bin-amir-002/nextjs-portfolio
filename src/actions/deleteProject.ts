"use server";

export const deleteProject = async (id: string) => {
  const res = await fetch(
    `https://nextjs-portfolio-backend.vercel.app/api/project/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await res.json();
};
