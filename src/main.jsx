import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Crée le root React
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.jsx";

const router = createBrowserRouter(routes);

// Rend l’app dans BrowserRouter (pour que Link, Routes, etc. fonctionnent)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
