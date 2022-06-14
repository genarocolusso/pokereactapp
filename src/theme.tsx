import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  shadows: {
    outline: "none",
  },
  styles: {
    global: {
      body: {
        bg: "#1D1C1C",
        color: "white",
      },
    },
  },
});

export default theme;
