import { useFormContext } from "react-hook-form";

export function useHandleNext(
  fieldName: string | string[],
  next: () => void
) {
  const { trigger } = useFormContext();

  const handleNext = async () => {
    const ok = await trigger(fieldName);
    if (!ok) return;
    next();
  };

  return handleNext;
}