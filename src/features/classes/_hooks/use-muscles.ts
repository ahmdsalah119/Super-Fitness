import { getMuscleGroups, getMusclesByGroupId } from "@/lib/apis/muscles.api";
import { useQuery } from "@tanstack/react-query";

export function useMuscleGroups(lang: "en" | "ar") {
  return useQuery({
    queryKey: ["muscleGroups", lang],
    queryFn: () => getMuscleGroups(lang),
  });
}

export function useMusclesByGroup(id: string | null, lang: "en" | "ar") {
  return useQuery({
    queryKey: ["musclesByGroup", id, lang],
    queryFn: () => getMusclesByGroupId(id!, lang),
    enabled: !!id,
  });
}
