"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "../_components/Navbar";
import { red, yellow } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: yellow[500],
    },
    mode: "light",
  },
});

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Template;
