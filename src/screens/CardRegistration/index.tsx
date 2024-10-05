import { Background } from "@components/Background";
import { Header } from "@components/Header";
import { Typography } from "@components/Typography";
import { ContainerInput, ContainerRegister, ContainerRow } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { paySchema } from "./schemaValidation";
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
    formState: { isValid, errors },
  } = useForm<FormData>({
    resolver: yupResolver(paySchema),
  });

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
          keyboardType="numeric"
          errorMessage={errors.cardNumber?.message}
          maxLength={19}
          label="número do cartão"
        />
        <Input
          control={control}
          rules={{ required: true }}
          errorMessage={errors.name?.message}
          name="name"
          label="nome do titular do cartão"
        />

        <ContainerRow>
          <ContainerInput>
            <Input
              maxLength={5}
              control={control}
              rules={{ required: true }}
              placeholder="04/26"
              errorMessage={errors.expiryDate?.message}
              name="expiryDate"
              label="vencimento"
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              control={control}
              rules={{ required: true }}
              secureTextEntry
              maxLength={3}
              errorMessage={errors.cvv?.message}
              keyboardType="numeric"
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
