/* eslint-disable import/no-unresolved */
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { Routes } from "./src/routes";

import { useFonts, PTSans_400Regular } from "@expo-google-fonts/pt-sans";

import { PTSansCaption_400Regular } from "@expo-google-fonts/pt-sans-caption";
import { Provider } from "react-redux";
import { store } from "@store/index";

export default function App() {
  let [fontsLoaded] = useFonts({
    PTSansCaption_400Regular,
    PTSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
