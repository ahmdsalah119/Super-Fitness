export async function getLevels(lang: "en" | "ar" = "en"): Promise<Level[]> {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/levels`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch levels");
    }

    const data: LevelsResponse = await res.json();

    return data.levels;
  } catch (error) {
    console.error("getLevels error:", error);

    throw new Error((error as Error).message || "Failed to fetch levels");
  }
}
