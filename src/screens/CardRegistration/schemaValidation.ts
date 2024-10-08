import * as yup from "yup";

export const paySchema = yup.object({
  cardNumber: yup
    .string()
    .min(19, "Deve ser um numero de cartão valido")
    .required("O numero do cartão e obrigatório"),
  expiryDate: yup
    .string()
    .required("Data de expiração e obrigatório")
    .test("Mes valido", "Mes invalido", function (value) {
      if (!value) {
        return false;
      }

      const [month] = value.split("/").map((item) => parseInt(item, 10));

      return month >= 1 && month <= 12;
    })
    .test(
      "Data futura",
      "Mes de validade deve estar no futuro",
      function (value) {
        if (!value) {
          return false;
        }

        const currentDate = new Date();
        const [month, year] = value
          .split("/")
          .map((item) => parseInt(item, 10));

        const expiryDate = new Date(year + 2000, month, 1);

        return expiryDate > currentDate;
      },
    ),
  name: yup.string().required("Nome obrigatório"),
  cvv: yup
    .string()
    .matches(/^[0-9]{3,4}$/, "CVV Invalido")
    .required("CVV e obrigatório"),
});
