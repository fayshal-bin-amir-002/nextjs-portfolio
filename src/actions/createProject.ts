"use server";

export const createProject = async (data: any) => {
  const res = await fetch("http://localhost:3500/api/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};
