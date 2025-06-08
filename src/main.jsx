import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Crée le root React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rend l’app dans BrowserRouter (pour que Link, Routes, etc. fonctionnent)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
