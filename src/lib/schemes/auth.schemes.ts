import type { IntlShape } from "react-intl";
import { z } from "zod";

export const loginFieldsSchema = (formatMessage: IntlShape["formatMessage"]) =>
  z.object({
    email: z.email({
      error: (issue) =>
        issue.input === undefined || issue.input === ""
          ? formatMessage({ id: "auth.email-required" })
          : formatMessage({ id: "auth.email-invalid" }),
    }),
    password: z.string().min(1, {
      message: formatMessage({ id: "auth.password-required" }),
    }),
  });

  export const ForgetPasswordFieldsSchema = (formatMessage: IntlShape["formatMessage"]) =>
  z.object({
    email: z.email({
      error: (issue) =>
        issue.input === undefined || issue.input === ""
          ? formatMessage({ id: "auth.email-required" })
          : formatMessage({ id: "auth.email-invalid" }),
    }),
  });

  export const OTPFieldsSchema = (formatMessage: IntlShape["formatMessage"]) =>
  z.object({
    otp: z.string().min(4, { message: formatMessage({ id: "otp-required" }) }),
  });

  export const ResetPasswordFieldsSchema = (formatMessage: IntlShape["formatMessage"]) =>
  z.object({
    newPassword: z.string().min(8, { message: formatMessage({ id: "password-min-length" }) }),
    rePassword: z.string().min(8, { message: formatMessage({ id: "confirm-password-min-length" }) }),
  }).refine((data) => data.newPassword === data.rePassword, {
    message: formatMessage({ id: "passwords-do-not-match" }),
  });