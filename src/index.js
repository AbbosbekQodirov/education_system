import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
