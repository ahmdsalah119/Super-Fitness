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

export async function SendOTPAction(email: string) {
  const response = await fetch(`${apiUrl}/auth/forgotPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const payload = await response.json();
  return payload

}

export async function VerifyOTPAction( resetCode : number) {
  const response = await fetch(`${apiUrl}/auth/verifyResetCode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resetCode }),
  });
  const payload = await response.json();
  return payload

}

export async function ResetPasswordAction(email: string , newPassword: string) {
  const response = await fetch(`${apiUrl}/auth/resetPassword`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({ email, newPassword }),
  });
 const payload = await response.json();
  return payload

}