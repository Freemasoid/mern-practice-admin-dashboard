import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./muiThemes.js";
import { useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SharedLayout, Dashboard } from "./pages";

function App() {
  const mode = useSelector((store) => store.theme.mode);
  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
