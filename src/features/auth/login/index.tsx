import { useIntl } from "react-intl";

import { LoginForm } from "./_components/login-form";

export default function Login() {
  // Translations
  const { formatMessage } = useIntl();

  return (
    <div className="bg-transparent p-8 md:p-10 text-white">
      {/* Welcome Message */}
      <p className="text-2xl leading-[140%] mb-14">
        {formatMessage(
          { id: "auth.login-welcome" },
          {
            span: (chunks) => (
              <span className="block text-5xl font-extrabold">{chunks}</span>
            ),
          },
        )}
      </p>

      {/* Login Form Box */}
      <LoginForm />
    </div>
  );
}
