"use server";

export const createContact = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const res = await fetch(
      "https://nextjs-portfolio-backend.vercel.app/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
