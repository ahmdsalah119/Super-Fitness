import { useIntl } from "react-intl";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSteps, OTPFields } from "@/lib/types/auth";
import { OTPFieldsSchema } from "@/lib/schemes/auth.schemes";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import {
  FORGOT_PASSWORD_STEPS,
  OTP_COOLDOWN_KEY,
  OTP_COOLDOWN_TIME,
} from "@/lib/constants/auth.constant";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { useVerifyOTP } from "../_hooks/use-verify-otp";
import { useEffect, useState } from "react";
import { useSendOTP } from "../_hooks/use-send-otp";
import { useLocalStorage } from "@/hooks/shared/use-local-storage";
import { toast } from "sonner";

interface OTPStepProps {
  setStep: React.Dispatch<React.SetStateAction<ForgotPasswordSteps>>;
}

export default function OTPStep({ setStep }: OTPStepProps) {
  // Translations
  const { formatMessage } = useIntl();

  // Mutations
  const { verifyOTP, isPending } = useVerifyOTP();
  //   hooks
  const form = useForm<OTPFields>({
    resolver: zodResolver(OTPFieldsSchema(formatMessage)),
    defaultValues: {
      otp: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<OTPFields> = (values) => {
    verifyOTP(Number(values.otp), {
      onSuccess: () => {
        // Move to the next step
        setStep(FORGOT_PASSWORD_STEPS.NEW_PASSWORD);
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
          {/* OTP Field */}
          <Controller
            name="otp"
            control={form.control}
            render={({ field, fieldState: { error, invalid } }) => (
              <>
                <FieldLabel>
                  {formatMessage({ id: "auth.enter-otp" })}
                </FieldLabel>
                <Field>
                  <InputOTP maxLength={6} {...field}>
                    {Array.from({ length: 4 }, (_, i) => i).map((i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTP>
                  {invalid && (
                    <FieldError className="text-destructive">
                      {error?.message}
                    </FieldError>
                  )}
                </Field>
              </>
            )}
          />
        </FieldGroup>
        <ResendOtp email={null} />
        {/* Error Box */}
        {/* {errorMessage && <ErrorBox error={errorMessage} className="mt-6" />} */}

        {/* Submit Button */}
        <Button
          size="lg"
          type="submit"
          loading={isPending}
          className="w-full mt-6"
        >
          {formatMessage({ id: "auth.verify-code" })}
        </Button>
      </form>
    </>
  );
}

function ResendOtp({ email }: { email: string | null }) {
  //translation
  const { formatMessage } = useIntl();
  //hooks
  const [otpCooldown, setValue, removeValue] = useLocalStorage(
    OTP_COOLDOWN_KEY,
    new Date(Date.now() + OTP_COOLDOWN_TIME).toISOString(),
  );

  // state
  const [countdown, setCountdown] = useState<number>(() => {
    if (!otpCooldown) return 0;

    const cooldown = new Date(otpCooldown);
    const remainingTime = Math.floor(
      (cooldown.getTime() - new Date().getTime()) / 1000,
    );
    return remainingTime;
  });
  //mutation
  const { sendOTP, isPending: isResendingOtp } = useSendOTP();

  // function
  const setCooldown = (cooldown: Date) => {
    const nextAllowedTime = new Date(cooldown.getTime() + OTP_COOLDOWN_TIME);
    setValue(nextAllowedTime.toISOString());
    setCountdown(OTP_COOLDOWN_TIME / 1000);
  };

  const handleResendOtp = () => {
    if (!email) return;
    sendOTP(email, {
      onSuccess: () => {
        setCooldown(new Date());
        toast.success(formatMessage({ id: "otp-sent-successfully" }));
      },
      onError: (error) => {
        toast.error(formatMessage({ id: "try-send-it-again" }));
      },
    });
  };

  // effects
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (otpCooldown) {
      interval = setInterval(() => {
        setCountdown((prev: number) => {
          if (prev <= 0) {
            clearInterval(interval);
            removeValue();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [otpCooldown, removeValue]);

  if (countdown > 0) {
    return (
      <p className="text-sm text-muted-foreground text-center">
        {formatMessage({ id: "request-another-code" })} ({countdown}s)
      </p>
    );
  }

  return (
    <p className="text-muted-foreground text-center">
      <Button
        type="button"
        loading={isResendingOtp}
        onClick={handleResendOtp}
        variant="link"
        className="text-primary w-fit border-none"
      >
        {formatMessage({ id: "resend-otp" })}
      </Button>
    </p>
  );
}
