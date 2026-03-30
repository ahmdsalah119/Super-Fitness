import type { z } from "zod";
import { loginFieldsSchema } from "../schemes/auth.schemes";

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  photo: string;
  createdAt: string;
};

export type LoginFields = z.infer<ReturnType<typeof loginFieldsSchema>>;
export type LoginResponse = ApiResponse<{
  token: string;
  user: User;
}>;
