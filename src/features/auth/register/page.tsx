import { useState } from "react";
import { useFormContext } from "react-hook-form";
import StepRegister from "./components/step-register";
import StepGender from "./components/step-gender";
import StepAge from "./components/step-age";
import StepHeight from "./components/step-height";
import StepWeight from "./components/step-weight";
import StepGoals from "./components/step-goals";
import StepLevels from "./components/step-levels";
import CircularProgressWithLabelDemo from "./components/circular-progress";
import { useRegister } from "./_hooks/use-register";
import { RegisterFormSchema } from "@/lib/schema/kyc.schema";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  // Navigation
  const navigate = useNavigate();

  // State
  const [step, setStep] = useState(0);

  // Variables
  const totalSteps = 7;

  // React Hook Form's Context
  const { handleSubmit } = useFormContext<RegisterFormSchema>();

  // Mutation
  const { mutate, isPending, error } = useRegister();

  // Mapping
  const levelMap: Record<string, string> = {
    Beginner: "level11",
    Novice: "level2",
    Intermediate: "level3",
    Advanced: "level4",
    Master: "level5",
    Expert: "level5",
    Legendary: "level5",
    "Grand Master": "level5",
  };

  // Functions
  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);
  const onSubmit = (data: RegisterFormSchema) => {
    const payload = {
      ...data,
      rePassword: data.password,
      activityLevel: levelMap[data.activityLevel],
    };
    mutate(payload, {
      onSuccess: () => {
        console.log(" Registered successfully");
        navigate("/auth/login");
      },
      onError: (err) => {
        console.error(" Error:", err);
      },
    });
  };

  return (
    <div className="">
      {/* Progress */}
      {step !== 0 && (
        <CircularProgressWithLabelDemo
          value={(step / (totalSteps - 1)) * 100}
          showLabel
          renderLabel={() => `${step}/${totalSteps - 1}`}
          size={64}
        />
      )}
      {/* Error UI */}
      {error && (
        <p className="text-red-500 text-sm">
          {(error as Error)?.message || "Something went wrong"}
        </p>
      )}
      {/* Steps */}
      {step === 0 && <StepRegister next={next} />}
      {step === 1 && <StepGender next={next} back={back} />}
      {step === 2 && <StepAge next={next} back={back} />}
      {step === 3 && <StepWeight next={next} back={back} />}
      {step === 4 && <StepHeight next={next} back={back} />}
      {step === 5 && <StepGoals next={next} back={back} />}

      {step === 6 && (
        <StepLevels
          next={handleSubmit(onSubmit)}
          back={back}
          loading={isPending}
        />
      )}
    </div>
  );
}
