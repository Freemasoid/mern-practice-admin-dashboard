import { createTheme } from "@mui/material/styles";

const colorTokens = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },

  primary: {
    100: "#d3dcde",
    200: "#a6b9be",
    300: "#7a979d",
    400: "#4d747d",
    500: "#21515c",
    600: "#1a414a",
    700: "#143137",
    800: "#0d2025",
    900: "#071012",
  },

  secondary: {
    50: "#fbfeff",
    100: "#f6fdff",
    200: "#eefcff",
    300: "#e5faff",
    400: "#ddf9ff",
    500: "#d4f7ff",
    600: "#aac6cc",
    700: "#7f9499",
    800: "#556366",
    900: "#2a3133",
  },
};

export const darkTheme = createTheme({
  palette: {
    primary: {
      ...colorTokens.primary,
      main: colorTokens.primary[400],
      light: colorTokens.primary[400],
    },
    secondary: {
      ...colorTokens.secondary,
      main: colorTokens.secondary[300],
    },
    neutral: {
      ...colorTokens.grey,
      main: colorTokens.grey[500],
    },
    background: {
      default: colorTokens.primary[600],
      alt: colorTokens.primary[500],
    },
  },

  typography: {
    fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      ...colorTokens.primary,
      main: colorTokens.primary[50],
      light: colorTokens.primary[100],
    },
    secondary: {
      ...colorTokens.secondary,
      main: colorTokens.secondary[600],
      light: colorTokens.secondary[700],
    },
    neutral: {
      ...colorTokens.grey,
      main: colorTokens.grey[500],
    },
    background: {
      default: colorTokens.grey[0],
      alt: colorTokens.grey[50],
    },
  },

  typography: {
    fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Ubuntu Sans", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
