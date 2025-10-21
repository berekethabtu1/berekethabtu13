import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./components/resumes"; // Correct import path
import "./styles/style.css"; // Global CSS

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
