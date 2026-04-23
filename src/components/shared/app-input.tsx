import { useState } from "react";
import { useIntl } from "react-intl";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Button } from "@/components/ui/button";

import { Mail, Lock, Eye, EyeOff, type LucideIcon } from "lucide-react";

const inputConfigs = {
  email: {
    icon: Mail,
    placeholder: "input.email",
  },
  password: {
    icon: Lock,
    placeholder: "input.password",
  },
};

type AppInputProps = React.ComponentProps<"input"> & {
  icon?: LucideIcon;
};

export function AppInput(props: AppInputProps) {
  // Translations
  const { formatMessage } = useIntl();

  // States
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Variables
  const inputConfig = inputConfigs[props.type as keyof typeof inputConfigs];
  const Icon = props.icon || inputConfig?.icon;
  const isPassword = props.type === "password";

  return (
    <InputGroup>
      {/* Addon Icon */}
      <InputGroupAddon>{Icon && <Icon />}</InputGroupAddon>

      {/* Input */}
      <InputGroupInput
        {...props}
        type={isPassword && isPasswordVisible ? "text" : props.type}
        placeholder={formatMessage({
          id: inputConfig?.placeholder || props.placeholder,
        })}
      />

      {/* Password Visibility Toggle */}
      {isPassword && (
        <InputGroupAddon align="inline-end">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          >
            {isPasswordVisible ? <EyeOff /> : <Eye />}
          </Button>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
