import { Text, TextInputProps } from "react-native";
import { ContainerInput, CustomContainer, InputStyles, Label } from "./styles";

import { Control, Controller, RegisterOptions } from "react-hook-form";

import MasterLogo from "@assets/svg/master.svg";
import VisaLogo from "@assets/svg/visa.svg";
import AmericanLogo from "@assets/svg/american-express.svg";
import { getCardType } from "@utils/getTypeCard";

interface InputProps extends TextInputProps {
  label?: string;
  control: Control<any>;
  name: string;
  creditCard?: boolean;
  errorMessage?: string;
  rules:
    | Omit<
        RegisterOptions<any, string>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
}

export function Input({
  label,
  control,
  rules,
  name,
  errorMessage,
  creditCard,
  ...rest
}: InputProps) {
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomContainer>
            {creditCard && getCardType(value)}

            <InputStyles
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              {...rest}
            />
          </CustomContainer>
        )}
      />
      {errorMessage && (
        <Text style={{ fontSize: 12, color: "#f53d2f", marginTop: 4 }}>
          {errorMessage}
        </Text>
      )}
    </ContainerInput>
  );
}
