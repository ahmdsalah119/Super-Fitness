import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginAction } from "@/lib/actions/auth.actions";
import { setAuthToken, setAuthUser } from "@/lib/utils/auth.utils";

import type { LoginFields } from "@/lib/types/auth";

export function useLogin() {
  // Navigation
  const navigate = useNavigate();

  // Mutations
  const {
    mutate: login,
    isPending,
    error,
  } = useMutation<unknown, Error, LoginFields>({
    mutationFn: async (fields: LoginFields) => {
      const response = await loginAction(fields);

      if ("error" in response) {
        throw new Error(response.error);
      }

      setAuthToken(response.token);
      setAuthUser(response.user);

      return response;
    },
    onSuccess: () => {
      // TODO: Make sure the home path is correct
      navigate("/");
    },
  });

  return { login, isPending, error, errorMessage: error?.message ?? "" };
}
