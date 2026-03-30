import axios, { isCancel, AxiosError } from "axios";

import type { LoginFields, LoginResponse } from "../types/auth";

const apiUrl = import.meta.env.VITE_API_URL;

export async function loginAction(credentials: LoginFields) {
  try {
    const response = await axios.post<LoginResponse>(
      `${apiUrl}/auth/signin`,
      credentials,
    );

    return response.data;
  } catch (error) {
    if (isCancel(error)) {
      throw error;
    }

    if (error instanceof AxiosError) {
      const message =
        (error.response?.data as { error?: string } | undefined)?.error ??
        "Something went wrong";
      throw new Error(message);
    }

    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Something went wrong");
  }
}
