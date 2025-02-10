"use server";

export const createContact = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const res = await fetch(
    "https://blog-website-backend-rho.vercel.app/api/contact",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return await res.json();
};
