"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

export const loginUser = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      (await cookies()).set("accessToken", result.data);
    }

    return result;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};

export const logoutUser = async () => {
  (await cookies()).delete("accessToken");
};
