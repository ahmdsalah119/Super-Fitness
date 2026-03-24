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
