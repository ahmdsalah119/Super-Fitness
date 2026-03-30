import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "@/hooks/auth/use-login";
import { loginFieldsSchema } from "@/lib/schemes/auth.schemes";
import type { LoginFields } from "@/lib/types/auth";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldError } from "@/components/ui/field";
import { ErrorBox } from "@/components/shared/error-box";
import { AppInput } from "@/components/shared/app-input";

export function LoginForm() {
  // Translations
  const { formatMessage } = useIntl();

  // Variables
  const loginFormSchema = loginFieldsSchema(formatMessage);

  // Hooks
  const form = useForm<LoginFields>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Mutations
  const { login, isPending, errorMessage } = useLogin();

  // Functions
  const onSubmit = (data: LoginFields) => {
    login(data);
  };

  return (
    <form
      className="flex flex-col items-start max-w-md mx-auto px-20 py-10 border rounded-[3.125rem]"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      {/* Form Title */}
      <h1 className="self-center text-2xl mb-4 font-extrabold mt-0">
        {formatMessage({ id: "auth.login" })}
      </h1>

      <FieldGroup>
        {/* Email Field */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState: { error, invalid } }) => (
            <Field>
              <AppInput {...field} type="email" />

              {invalid && (
                <FieldError className="text-destructive">
                  {error?.message}
                </FieldError>
              )}
            </Field>
          )}
        />

        {/* Password Field */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState: { error, invalid } }) => (
            <Field>
              <AppInput {...field} type="password" />
              {invalid && <FieldError>{error?.message}</FieldError>}
            </Field>
          )}
        />
      </FieldGroup>

      {/* Forgot Password Button */}
      <Button
        asChild
        variant="link"
        type="button"
        className="self-end text-base font-bold p-0 underline"
      >
        {/* TODO: Make sure the forget password path is correct */}
        <Link to="/auth/forgot-password">
          {formatMessage({ id: "auth.forgot-password" })}
        </Link>
      </Button>

      {/* Error Box */}
      {errorMessage && <ErrorBox error={errorMessage} className="mt-6" />}

      {/* Submit Button */}
      <Button
        size="lg"
        type="submit"
        loading={isPending}
        className="w-full mt-6"
      >
        {formatMessage({ id: "auth.login" })}
      </Button>

      {/* Register Button */}
      <p className="self-center mt-2">
        {formatMessage(
          { id: "auth.dont-have-account" },
          {
            cta: (chunks) => (
              <Button
                asChild
                variant="link"
                type="button"
                className="text-base font-bold underline p-0"
              >
                {/* TODO: Make sure the register path is correct */}
                <Link to="/auth/register"> {chunks}</Link>
              </Button>
            ),
          },
        )}
      </p>
    </form>
  );
}
