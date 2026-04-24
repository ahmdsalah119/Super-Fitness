import { useIntl } from "react-intl";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgetPasswordFields, ForgotPasswordSteps } from "@/lib/types/auth";
import { ForgetPasswordFieldsSchema } from "@/lib/schemes/auth.schemes";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { AppInput } from "@/components/shared/app-input";
import { Button } from "@/components/ui/button";
import { FORGOT_PASSWORD_STEPS } from "@/lib/constants/auth.constant";
import { useSendOTP } from "../_hooks/use-send-otp";

interface EmailStepProps {
  setStep: React.Dispatch<React.SetStateAction<ForgotPasswordSteps>>;
}

export default function EmailStep({ setStep }: EmailStepProps) {
  // Translations
  const { formatMessage } = useIntl();

  // Mutations
  const { sendOTP, isPending, errorMessage } = useSendOTP();
  //   hooks
  const form = useForm<ForgetPasswordFields>({
    resolver: zodResolver(ForgetPasswordFieldsSchema(formatMessage)),
    defaultValues: {
      email: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<ForgetPasswordFields> = (values) => {
    sendOTP(values.email, {
      onSuccess: () => {
        // Move to the next step
        setStep(FORGOT_PASSWORD_STEPS.OTP);
      },
    });
  };

  return (
    <>
      <form
        className="flex flex-col items-start max-w-md mx-auto px-20 py-10 border border-white/30 rounded-[3.125rem]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Form Title */}
        <h1 className="self-center text-2xl text-white mb-4 font-extrabold mt-0">
          {formatMessage({ id: "auth.Forget-password" })}
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
          {formatMessage({ id: "auth.send-otp" })}
        </Button>
      </form>
    </>
  );
}
