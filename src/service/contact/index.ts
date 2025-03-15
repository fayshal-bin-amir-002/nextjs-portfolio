"use server";

import { revalidateTag } from "next/cache";

export const createContact = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    revalidateTag("Contact-Messages");

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const getAllContactMessages = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/contact`, {
      cache: "force-cache",
      next: {
        tags: ["Contact-Messages"],
      },
    });
    const data = await res.json();

    return data;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
