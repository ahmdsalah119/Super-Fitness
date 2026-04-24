import KycFormProvider from "./components/kyc-form-provider";
import RegisterPage from "./page";

export default function Register() {
  return (
    <KycFormProvider>
      <RegisterPage />
    </KycFormProvider>
  );
}
