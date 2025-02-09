"use server";

export const updateProject = async (id: string, data: any) => {
  const res = await fetch(`http://localhost:3500/api/project/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};
