"use server";

export const deleteBlog = async (id: string) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
