import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import Favicon from "react-favicon";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Favicon url="https://www.researchgate.net/profile/Flamarion-Dutra-Alves/publication/340655700/figure/fig1/AS:880619714273281@1586967509580/Figura-1-Foto-de-Manuel-Correia-de-Andrade_Q320.jpg" />
    <App />
  </React.StrictMode>
);
