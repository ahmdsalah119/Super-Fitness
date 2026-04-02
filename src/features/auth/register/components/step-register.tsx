import { useFormContext, useFormState } from "react-hook-form";
import { Input } from "@/components/ui/input";
import StepWrapper from "./step-wrapper";
import { useHandleNext } from "../_hooks/use-handle-next";

export default function StepRegister({ next }: { next: () => void }) {
  const { register, control } = useFormContext();

  const fields = ["firstName", "lastName", "email", "password"];

  const { errors, dirtyFields } = useFormState({
    control,
    name: fields,
  });

  const allTouched = fields.every((field) => dirtyFields[field]);
  const hasErrors = fields.some((field) => errors[field]);

  const handleNext = useHandleNext(fields, next);

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
