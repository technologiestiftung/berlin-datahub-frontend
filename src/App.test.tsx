import React from "react";
import { render, screen, waitForElement } from "@testing-library/react";
import App from "./App";
import { StoreProvider } from "easy-peasy";
import store from "./state/store";
import { ThemeProvider } from "theme-ui";
import theme from "./style/theme";

window.scrollTo = jest.fn();

test("renders claim element", () => {
  const { getByText } = render(
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreProvider>
  );
  const claimElement = getByText(/Offene Datenplattform für IoT-Projekte/i);
  expect(claimElement).toBeInTheDocument();
});
