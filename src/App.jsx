import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./muiThemes.js";
import { useMemo } from "react";

function App() {
  const mode = useSelector((state) => state.globalTheme.mode);
  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
