import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("product") !== "[]") {
      setProduct(JSON.parse(localStorage.getItem("product") || "[]"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
