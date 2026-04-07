import { FORGOT_PASSWORD_STEPS } from "@/lib/constants/auth.constant";
import { ForgotPasswordSteps } from "@/lib/types/auth";
import { useIntl } from "react-intl";
import { useState } from "react";
import EmailStep from "./verfiy-email-step";
import OTPStep from "./otp.step";
import NewPasswordStep from "./new-password-step";

export default function ForgotPasswordLayout() {
  // translation
  const { formatMessage } = useIntl();
  // states
  const [step, setStep] = useState<ForgotPasswordSteps>(
    FORGOT_PASSWORD_STEPS.EMAIL,
  );
  const [email, setEmail] = useState<string>("");
  // variables
  const steps = {
    [FORGOT_PASSWORD_STEPS.EMAIL]: {
      title: formatMessage({ id: "auth.forget-password" }),
      form: <EmailStep setStep={setStep} />,
    },
    [FORGOT_PASSWORD_STEPS.OTP]: {
      title: formatMessage({ id: "auth.enter-otp" }),
      form: <OTPStep setStep={setStep} />,
    },
    [FORGOT_PASSWORD_STEPS.NEW_PASSWORD]: {
      title: formatMessage({ id: "auth.new-password" }),
      form: <NewPasswordStep email={email} setStep={setStep} />,
    },
  } as const;
  return (
    <>
      {/* Form Title */}
      <h1 className="self-center text-2xl text-white mb-4 font-extrabold mt-0">
        {steps[step].title}
      </h1>
      {/* Form Content  */}
      {steps[step].form}
    </>
  );
}
