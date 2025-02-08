"use server";

export const createContact = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const res = await fetch("http://localhost:3500/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};
