import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Conditions from "./components/Conditions";
import MainPage from "./components/MainPage";
import VerifyUser from "./components/VerifyUser";

const theme = createTheme({
  typography: {
    fontFamily: "Playfair Display, serif",
  },
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#757575", // Non-primary color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/TermsAndConditions" element={<Conditions />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/VerifyUser" element={<VerifyUser />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
