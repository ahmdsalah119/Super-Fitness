import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/lib/schema/kyc.schema";

export default function KycFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
