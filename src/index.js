import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { ProductContextProvider } from "./context/ProductContext";
import { FilterContextProvider } from "./context/FilterContext";
import { CartContextProvider } from "./context/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Auth0Provider
      domain="dev-v5nhiimixq5q54aq.us.auth0.com"
      clientId="EiBaRiQomigBG0y7EBOhyMF1bExu43zP"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ProductContextProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </FilterContextProvider>
      </ProductContextProvider>
    </Auth0Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
