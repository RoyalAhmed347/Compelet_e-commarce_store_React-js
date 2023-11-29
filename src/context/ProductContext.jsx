import React, { createContext, useContext, useEffect, useReducer } from "react";
import reduser from "../Reduser/ProductReduser";
import Products from "../ProductData/Products.json";
const initialStat = {
  isLoading: false,
  isError: false,
  products: [],
  featuresProducts: [],
  productIsLoading: false,
  productIsError: false,
  singelProduct: {},
};

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, initialStat);

  useEffect(() => {
    dispatch({ type: "product_loading" });
    dispatch({
      type: "set_api_data",
      payload: Products,
    });
  }, []);

  const getSingelProduct = (selectedId) => {
    dispatch({ type: "singel_product_loading" });

    const present = Products.find((elem) => elem.id === selectedId);

    if (present) {
      let selectedItem = Products.filter((elem) => elem.id === selectedId);
      selectedItem = selectedItem[0];

      dispatch({ type: "singel_set_api_data", payload: selectedItem });
    } else {
      dispatch({ type: "singel_product_error" });
    }
  };

  return (
    <ProductContext.Provider value={{ ...state, getSingelProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};
export { ProductContextProvider, ProductContext, useProductContext };
