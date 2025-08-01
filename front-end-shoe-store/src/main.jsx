import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
//Snackbar allows us to do alerts for the entire app since it wraps arround the app tag. 
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
    
  </BrowserRouter>
);
