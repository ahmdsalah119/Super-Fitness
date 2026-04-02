import { RegisterFormSchema } from "@/lib/schema/kyc.schema";

export async function registerApi(data: RegisterFormSchema) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Register failed");
    }

    return result;
  } catch (error) {
    console.error("registerApi error:", error);

    throw new Error((error as Error).message || "Failed to fetch levels");
  }
}
