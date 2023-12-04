"use client";

import {
  CssBaseline,
  PaletteColorOptions,
  PaletteOptions,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";

interface MyPaletteOptions extends PaletteOptions {
  normal?: PaletteColorOptions;
  fire?: PaletteColorOptions;
  water?: PaletteColorOptions;
  electric?: PaletteColorOptions;
  grass?: PaletteColorOptions;
  ice?: PaletteColorOptions;
  fighting?: PaletteColorOptions;
  poison?: PaletteColorOptions;
  ground?: PaletteColorOptions;
  flying?: PaletteColorOptions;
  psychic?: PaletteColorOptions;
  bug?: PaletteColorOptions;
  rock?: PaletteColorOptions;
  ghost?: PaletteColorOptions;
  dragon?: PaletteColorOptions;
  dark?: PaletteColorOptions;
  steel?: PaletteColorOptions;
  fairy?: PaletteColorOptions;
}

// Augment the palette to include an ochre color
declare module "@mui/material/styles" {
  interface Palette {
    normal: Palette["primary"];
    fire: Palette["primary"];
    water: Palette["primary"];
    electric: Palette["primary"];
    grass: Palette["primary"];
    ice: Palette["primary"];
    fighting: Palette["primary"];
    poison: Palette["primary"];
    ground: Palette["primary"];
    flying: Palette["primary"];
    psychic: Palette["primary"];
    bug: Palette["primary"];
    rock: Palette["primary"];
    ghost: Palette["primary"];
    dragon: Palette["primary"];
    dark: Palette["primary"];
    steel: Palette["primary"];
    fairy: Palette["primary"];
  }

  interface PaletteOptions {
    normal?: PaletteOptions["primary"];
    fire?: PaletteOptions["primary"];
    water?: PaletteOptions["primary"];
    electric?: PaletteOptions["primary"];
    grass?: PaletteOptions["primary"];
    ice?: PaletteOptions["primary"];
    fighting?: PaletteOptions["primary"];
    poison?: PaletteOptions["primary"];
    ground?: PaletteOptions["primary"];
    flying?: PaletteOptions["primary"];
    psychic?: PaletteOptions["primary"];
    bug?: PaletteOptions["primary"];
    rock?: PaletteOptions["primary"];
    ghost?: PaletteOptions["primary"];
    dragon?: PaletteOptions["primary"];
    dark?: PaletteOptions["primary"];
    steel?: PaletteOptions["primary"];
    fairy?: PaletteOptions["primary"];
  }
}

// Update the Chip's color options to include an ochre option
declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    normal: true;
    fire: true;
    water: true;
    electric: true;
    grass: true;
    ice: true;
    fighting: true;
    poison: true;
    ground: true;
    flying: true;
    psychic: true;
    bug: true;
    rock: true;
    ghost: true;
    dragon: true;
    dark: true;
    steel: true;
    fairy: true;
  }
}

const customTheme = createTheme({
  palette: {
    normal: {
      main: "#A8A77A",
      light: "#C6C6A7",
      dark: "#6D6D4E",
      contrastText: "#FFFFFF",
    },
    fire: {
      main: "#F57D31",
      light: "#F8B18C",
      dark: "#B24D00",
      contrastText: "#FFFFFF",
    },
    water: {
      main: "#6390F0",
      light: "#9DB7F5",
      dark: "#386CEB",
      contrastText: "#FFFFFF",
    },
    electric: {
      main: "#F7D02C",
      light: "#FAE7A8",
      dark: "#A1871F",
      contrastText: "#FFFFFF",
    },
    grass: {
      main: "#7AC74C",
      light: "#A7DB8D",
      dark: "#4E8234",
      contrastText: "#FFFFFF",
    },
    ice: {
      main: "#96D9D6",
      light: "#BCE6E3",
      dark: "#638D8D",
      contrastText: "#FFFFFF",
    },
    fighting: {
      main: "#C22E28",
      light: "#EB4971",
      dark: "#8E1519",
      contrastText: "#FFFFFF",
    },
    poison: {
      main: "#A33EA1",
      light: "#C183C1",
      dark: "#682A68",
      contrastText: "#FFFFFF",
    },
    ground: {
      main: "#E2BF65",
      light: "#EBD69D",
      dark: "#927D44",
      contrastText: "#FFFFFF",
    },
    flying: {
      main: "#A98FF3",
      light: "#D4BDF5",
      dark: "#6D5E9C",
      contrastText: "#FFFFFF",
    },
    psychic: {
      main: "#F95587",
      light: "#FA92B2",
      dark: "#A13959",
      contrastText: "#FFFFFF",
    },
    bug: {
      main: "#A6B91A",
      light: "#C6D16E",
      dark: "#6D7815",
      contrastText: "#FFFFFF",
    },
    rock: {
      main: "#B6A136",
      light: "#D1C17D",
      dark: "#786824",
      contrastText: "#FFFFFF",
    },
    ghost: {
      main: "#735797",
      light: "#A292BC",
      dark: "#493963",
      contrastText: "#FFFFFF",
    },
    dragon: {
      main: "#6F35FC",
      light: "#A79AF7",
      dark: "#371D91",
      contrastText: "#FFFFFF",
    },
    dark: {
      main: "#705746",
      light: "#A29288",
      dark: "#49392F",
      contrastText: "#FFFFFF",
    },
    steel: {
      main: "#B7B7CE",
      light: "#D1D1E0",
      dark: "#8C8C9A",
      contrastText: "#FFFFFF",
    },
    fairy: {
      main: "#D685AD",
      light: "#F4BDC9",
      dark: "#9B6470",
      contrastText: "#FFFFFF",
    },
    primary: {
      light: "#6ab7ff",
      main: "#001F3F", // Navy Blue
      dark: "#0069c0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#8bf6ff",
      main: "#008080", // Teal
      dark: "#087f23",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F5F5", // Light Gray
      paper: "#FFFFFF", // White
    },
    text: {
      primary: "#333333", // Dark Gray
    },
    mode: "light",
  } as MyPaletteOptions,
});

// @TODO: Create a dark theme
// const darkThemePalette: PaletteOptions = {
//   primary: {
//     light: '#6ab7ff',
//     main: '#001F3F', // Navy Blue
//     dark: '#0069c0',
//     contrastText: '#fff',
//   },
//   secondary: {
//     light: '#8bf6ff',
//     main: '#008080', // Teal
//     dark: '#087f23',
//     contrastText: '#fff',
//   },
//   background: {
//     default: '#121212', // Dark Gray
//     paper: '#333333', // Darker Gray
//   },
//   text: {
//     primary: '#FFFFFF', // White
//   },
// };

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
