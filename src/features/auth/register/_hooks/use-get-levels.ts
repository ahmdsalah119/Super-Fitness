import { useQuery } from "@tanstack/react-query";
import { getLevels } from "../api/get-levels.api";

export function useLevels(lang: "en" | "ar") {
  return useQuery({
    queryKey: ["levels", lang],
    queryFn: () => getLevels(lang),
  });
}