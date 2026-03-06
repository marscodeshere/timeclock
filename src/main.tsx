import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator data-bs-theme="dark">
      <App />
    </Authenticator>
  </React.StrictMode>
);