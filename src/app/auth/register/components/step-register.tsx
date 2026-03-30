import { useFormContext, useFormState } from "react-hook-form";
import { Input } from "@/components/ui/input";
import StepWrapper from "./step-wrapper";

export default function StepRegister({ next }: { next: () => void }) {
  const { register, trigger, control } = useFormContext();

  const fields = ["firstName", "lastName", "email", "password"];

  console.log("render......");

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
      <div className="flex flex-col gap-4 w-80">
        <Input {...register("firstName")} placeholder="First name" />
        <Input {...register("lastName")} placeholder="Last name" />
        <Input {...register("email")} placeholder="Email" />
        <Input {...register("password")} placeholder="Password" />
      </div>
    </StepWrapper>
  );
}
