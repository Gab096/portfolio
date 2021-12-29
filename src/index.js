import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from "react-router-dom";
import App from "./routes/routes";
import history from "./routes/history"

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
