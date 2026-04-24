// hooks/use-register.ts

import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../api/register.api";

export function useRegister() {
  const mutation = useMutation({
    mutationFn: registerApi,

    onSuccess: (data) => {
      console.log("SUCCESS", data);
    },

    onError: (error: any) => {
      console.log("ERROR", error.message);
    },
  });

  return mutation;
}