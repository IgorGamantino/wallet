import { TextInputProps } from "react-native";
import { ContainerInput, CustomContainer, InputStyles, Label } from "./styles";

import { Control, Controller, RegisterOptions } from "react-hook-form";
import Entypo from "@expo/vector-icons/Entypo";
interface InputProps extends TextInputProps {
  label?: string;
  control: Control<any>;
  name: string;
  creditCard?: boolean;
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
            {creditCard && (
              <Entypo
                name="credit-card"
                style={{ marginRight: 10 }}
                size={24}
                color="black"
              />
            )}
            <InputStyles
              // placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </CustomContainer>
        )}
      />
    </ContainerInput>
  );
}
