import { render } from "@testing-library/react-native";
import { ReactElement, ReactNode } from "react";
import theme from "src/theme";

import { ThemeProvider } from "styled-components/native";

export const renderWithTheme = (
  ui: ReactElement,
  { ...renderOptions } = {},
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
