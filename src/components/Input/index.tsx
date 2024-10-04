import { View,TextInputProps} from "react-native";
import { ContainerInput, InputStyles, Label } from "./styles";

interface InputProps extends TextInputProps {
    label?: string
}

export function Input ({label, ...rest}:InputProps) {
    return (
        <ContainerInput>
        <Label>{label}</Label>
        <InputStyles  {...rest}/>
        </ContainerInput>
    )
}
