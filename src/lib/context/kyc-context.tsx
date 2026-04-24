import { createContext, useContext, useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  gender: "male" | "female" | "";
  age: number | null;
  weight: string;
  height: string;
  goal: string;
  activityLevel: string;
}

interface KycContextType {
  step: number;
  formData: FormData;
  updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const KycContext = createContext<KycContextType | null>(null);

export const KycProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
    gender: "",
    age: null,
    weight: "",
    height: "",
    goal: "",
    activityLevel: "",
  });

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <KycContext.Provider
      value={{ step, formData, updateField, nextStep, prevStep }}
    >
      {children}
    </KycContext.Provider>
  );
};

export const useKyc = () => {
  const context = useContext(KycContext);
  if (!context) {
    throw new Error("useKyc must be used within KycProvider");
  }
  return context;
};