import { Controller, useFormContext, useFormState } from "react-hook-form";
import { Field, FieldGroup, FieldError } from "@/components/ui/field";
import { AppInput } from "@/components/shared/app-input";
import StepWrapper from "./step-wrapper";
import { User } from "lucide-react";
import { useIntl } from "react-intl";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function StepRegister({ next }: { next: () => void }) {
  // React Hook Form's Context
  const { trigger, control } = useFormContext();

  // Translations
  const { formatMessage } = useIntl();

  const fields = ["firstName", "lastName", "email", "password"];

  const { errors, dirtyFields } = useFormState({
    control,
    name: fields,
  });

  const allTouched = fields.every((field) => dirtyFields[field]);
  const hasErrors = fields.some((field) => errors[field]);

  const handleNext = async () => {
    const ok = await trigger(fields);
    if (!ok) return;
    next();
  };

  return (
    <StepWrapper onNext={handleNext} disableNext={!allTouched || hasErrors}>
      <h1 className="text-5xl font-extrabold text-white">
        <div className="text-lg font-normal">
          {" "}
          {formatMessage({
            id: "auth.welcome",
          })}
        </div>
        {formatMessage({
          id: "register.welcome",
        })}
      </h1>
      <div className="flex flex-col items-start max-w-md mx-auto px-20 py-10 border rounded-[3.125rem] mb-10">
        <h3 className="text-2xl w-full mb-4 font-extrabold text-center">
          {formatMessage({
            id: "register",
          })}
        </h3>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <FieldGroup>
            {/* First Name */}
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState: { error, invalid } }) => (
                <Field>
                  <AppInput
                    {...field}
                    type="text"
                    icon={User}
                    placeholder="input.firstName"
                  />

                  {invalid && (
                    <FieldError className="text-red-400">
                      {error?.message}
                    </FieldError>
                  )}
                </Field>
              )}
            />
            {/* Last Name */}
            <Controller
              name="lastName"
              control={control}
              render={({ field, fieldState: { error, invalid } }) => (
                <Field>
                  <AppInput
                    {...field}
                    type="text"
                    icon={User}
                    placeholder="input.lastName"
                  />

                  {invalid && (
                    <FieldError className="text-red-400">
                      {error?.message}
                    </FieldError>
                  )}
                </Field>
              )}
            />
            {/* Email Field */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error, invalid } }) => (
                <Field>
                  <AppInput {...field} type="email" />

                  {invalid && (
                    <FieldError className="text-red-400">
                      {error?.message}
                    </FieldError>
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { error, invalid } }) => (
                <Field>
                  <AppInput {...field} type="password" />
                  {invalid && (
                    <FieldError className="text-red-400">
                      {error?.message}
                    </FieldError>
                  )}
                </Field>
              )}
            />
          </FieldGroup>
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

          <Button
            onClick={handleNext}
            disabled={!allTouched || hasErrors}
            className="font-extrabold h-10 cursor-pointer px-4 py-2 bg-[#FF4100] rounded-full disabled:bg-[#D3D3D3] disabled:opacity-100 disabled:text-white w-[343px]"
          >
            Next
          </Button>

          {/* Register Button */}
          <p className="self-center mt-2">
            {formatMessage(
              { id: "auth.do-have-account" },
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
        </div>
      </div>
    </StepWrapper>
  );
}
