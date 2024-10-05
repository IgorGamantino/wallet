import MasterLogo from "@assets/svg/master.svg";
import VisaLogo from "@assets/svg/visa.svg";
import AmericanLogo from "@assets/svg/american-express.svg";
import Entypo from "@expo/vector-icons/Entypo";

export const getCardType = (number: string) => {
  const trimmedNumber = number?.replace(/\s/g, "");
  if (/^4/.test(trimmedNumber))
    return <VisaLogo width={24} height={24} style={{ marginRight: 10 }} />;
  if (/^5[1-5]/.test(trimmedNumber))
    return <MasterLogo width={24} height={24} style={{ marginRight: 10 }} />;
  if (/^3[47]/.test(trimmedNumber))
    return <AmericanLogo width={24} height={24} style={{ marginRight: 10 }} />;

  return (
    <Entypo
      name="credit-card"
      style={{ marginRight: 10 }}
      size={24}
      color="black"
    />
  );
};
