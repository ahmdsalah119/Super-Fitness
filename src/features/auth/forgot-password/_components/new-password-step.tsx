import { useIntl } from "react-intl";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSteps, ResetPasswordFields } from "@/lib/types/auth";
import {  ResetPasswordFieldsSchema } from "@/lib/schemes/auth.schemes";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { AppInput } from "@/components/shared/app-input";
import { Button } from "@/components/ui/button";
import { useResetPassword } from "../_hooks/use-reset-password";

interface NewPasswordStepProps {
  email : string | null;
  setStep : React.Dispatch<React.SetStateAction<ForgotPasswordSteps>>
}

export default function NewPasswordStep({ email, setStep }: NewPasswordStepProps) {
 // Translations
  const { formatMessage } = useIntl();


// Mutations
  const { resetPassword , isPending } = useResetPassword();
//   hooks
 const form = useForm<ResetPasswordFields>({
    resolver: zodResolver(ResetPasswordFieldsSchema(formatMessage)),
    defaultValues: {
      newPassword: "",
      rePassword: "",
    },
  });

    // Functions
  const onSubmit : SubmitHandler<ResetPasswordFields> =(values) => {
    if (!email) return;
    resetPassword({ email, newPassword: values.newPassword })
  }

  return <>
     <form
      className="flex flex-col items-start max-w-md mx-auto px-20 py-10 border border-white/30 rounded-[3.125rem]"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      {/* Form Title */}
      <h1 className="self-center text-2xl text-white mb-4 font-extrabold mt-0">
        {formatMessage({ id: "reset-password" })}
      </h1>

      <FieldGroup>
        {/* NewPassword Field */}
        <Controller
          name="newPassword"
          control={form.control}
          render={({ field, fieldState: { error, invalid } }) => (
            <Field>
              <AppInput {...field} type="password" />

              {invalid && (
                <FieldError className="text-destructive">
                  {error?.message}
                </FieldError>
              )}
            </Field>
          )}
        />
      </FieldGroup>
      
      <FieldGroup>
        {/* RePassword Field */}
        <Controller
          name="rePassword"
          control={form.control}
          render={({ field, fieldState: { error, invalid } }) => (
            <Field>
              <AppInput {...field} type="password" />

              {invalid && (
                <FieldError className="text-destructive">
                  {error?.message}
                </FieldError>
              )}
            </Field>
          )}
        />
      </FieldGroup>

      {/* Error Box */}
      {/* {errorMessage && <ErrorBox error={errorMessage} className="mt-6" />} */}

      {/* Submit Button */}
      <Button
        size="lg"
        type="submit"
        loading={isPending}
        className="w-full mt-6"
      >
        {formatMessage({ id: "reset-password" })}
      </Button>
    </form>
  
  </>
}
