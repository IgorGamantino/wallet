import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button } from "./src/components/Button";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Input } from "./src/components/Input";
import { Typography } from "./src/components/Typography";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Typography>Wallet test</Typography>

        <Button text="hello world" />
        <Button text="hello world" variant="green" />
        <Input label="Insira seu numero" />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    backgroundColor: "#142995",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
