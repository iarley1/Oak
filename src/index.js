import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/globalStyles";
import { ProductProvider } from "./context/productContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <GlobalStyle />
      <App />
    </ProductProvider>
  </React.StrictMode>
);

reportWebVitals();
