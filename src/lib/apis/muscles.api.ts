export async function getMuscleGroups(
  lang: "en" | "ar" = "en"
): Promise<MuscleGroup[]> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/muscles`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });

  const data: ApiResponse<{ musclesGroup: MuscleGroup[] }> =
    await res.json();

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.musclesGroup;
}

export async function getMusclesByGroupId(
  id: string,
  lang: "en" | "ar" = "en"
): Promise<MuscleGroupResponse> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/musclesGroup/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
    }
  );

  const data: ApiResponse<{
    muscleGroup: MuscleGroup;
    muscles: Muscle[];
  }> = await res.json();

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data;
}