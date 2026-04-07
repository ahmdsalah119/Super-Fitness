import type { z } from "zod";
import { loginFieldsSchema , ForgetPasswordFieldsSchema , OTPFieldsSchema, ResetPasswordFieldsSchema} from "../schemes/auth.schemes";
import {FORGOT_PASSWORD_STEPS} from "../constants/auth.constant"; 

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

export type ForgotPasswordSteps = (typeof FORGOT_PASSWORD_STEPS)[keyof typeof FORGOT_PASSWORD_STEPS];
export type ForgetPasswordFields = z.infer<ReturnType<typeof ForgetPasswordFieldsSchema>>;
export type OTPFields = z.infer<ReturnType<typeof OTPFieldsSchema>>;
export type ResetPasswordFields = z.infer<ReturnType<typeof ResetPasswordFieldsSchema>>;