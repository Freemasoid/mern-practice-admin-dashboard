import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SharedLayout, Dashboard } from "./pages";
import { createTheme } from "@mui/material/styles";
import { themeSwitch } from "./muiThemes.js";

function App() {
  const mode = useSelector((store) => store.theme.mode);
  const theme = useMemo(() => createTheme(themeSwitch(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
