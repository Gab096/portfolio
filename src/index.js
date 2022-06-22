import React from "react";
import ReactDOM from "react-dom";
import { theme } from "./theme";
import { Router } from "react-router-dom";
import App from "./routes/routes";
import history from "./routes/history";
import { ThemeProvider } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
