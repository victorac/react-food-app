import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./components/Store/CartProvider";
import { MenuProvider } from "./components/Store/MenuProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MenuProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MenuProvider>
  </React.StrictMode>
);
