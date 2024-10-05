import { Background } from "@components/Background";
import { Header } from "@components/Header";
import { Typography } from "@components/Typography";
import { ContainerInput, ContainerRegister, ContainerRow } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useForm } from "react-hook-form";

type FormData = {
  cardNumber: string;
  name: string;
  expiryDate: string;
  cvv: string;
};

export function CardRegistration() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("log");
    console.log(data);
  };
  return (
    <Background>
      <Header />

      <ContainerRegister>
        <Typography color="white">Wallet Test</Typography>

        <Input
          control={control}
          creditCard
          rules={{ required: true }}
          name="cardNumber"
          maxLength={19}
          label="número do cartão"
        />
        <Input
          control={control}
          rules={{ required: true }}
          name="name"
          label="nome do titular do cartão"
        />

        <ContainerRow>
          <ContainerInput>
            <Input
              control={control}
              rules={{ required: true }}
              name="expiryDate"
              label="vencimento"
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              control={control}
              rules={{ required: true }}
              name="cvv"
              label="código de segurança"
            />
          </ContainerInput>
        </ContainerRow>

        <Button
          text="avançar"
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        />
      </ContainerRegister>
    </Background>
  );
}
