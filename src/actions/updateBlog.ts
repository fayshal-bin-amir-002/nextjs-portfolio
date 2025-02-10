"use server";

type TBlog = {
  title?: string;
  image?: string;
  description?: string;
  content?: string;
};

export const updateBlog = async (id: string, data: TBlog) => {
  const res = await fetch(
    `https://blog-website-backend-rho.vercel.app/api/blogs/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return await res.json();
};
