"use server";

type TBlog = {
  title: string;
  image: string;
  description: string;
  content: string;
};

export const postBlog = async (data: TBlog) => {
  try {
    const res = await fetch(
      "https://nextjs-portfolio-backend.vercel.app/api/blogs",
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
