/* eslint-disable import/no-unresolved */
import { Background } from "@components/Background";
import { Header } from "@components/Header";
import { Typography } from "@components/Typography";
import { ContainerInput, ContainerRegister, ContainerRow } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { paySchema } from "./schemaValidation";
import { api } from "@services/api";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "@store/index";
import { setCardCreateSuccess } from "@store/card/slice";
import { Alert } from "react-native";
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
    formState: { errors, isDirty },
  } = useForm<FormData>({
    resolver: yupResolver(paySchema),
  });

  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  const onSubmit = async (data: FormData) => {
    try {
      const body = {
        number: data.cardNumber,
        cvv: data.cvv,
        name: data.name,
        expiryDate: data.expiryDate,
      };

      await api.post("/cards", body);

      dispatch(setCardCreateSuccess(body));

      navigation.navigate("CardSaveSuccess");
    } catch (error) {
      Alert.alert(
        "Error ao salvar o cartao",
        "Deu erro ao tentar salvar seu cartao",
        [
          {
            onPress: () => navigation.goBack(),
          },
        ],
      );
    }
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
          mask={[
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
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
              mask={[/\d/, /\d/, "/", /\d/, /\d/]}
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
          disabled={!isDirty}
          onPress={handleSubmit(onSubmit)}
        />
      </ContainerRegister>
    </Background>
  );
}
