import React, { createContext, useContext, useEffect, useReducer } from "react";
import reduser from "../Reduser/ProductReduser";
// import Products from "../ProductData/Products.json";
import axios from "axios";
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
    getAllProduct();
    // dispatch({
    //   type: "set_api_data",
    //   payload: Products,
    // });
  }, []);

  const getAllProduct = async () => {
    try {
      dispatch({ type: "product_loading" });
      const res = await axios.get('https://dummyjson.com/products')
      console.log("🚀 ~ getAllProduct ~ res:", res)
      dispatch({
        type: "set_api_data",
        payload: res.data.products,
      });

    } catch (error) {
      console.log("🚀 ~ getAllProduct ~ error:", error)

    }
  }


  const getSingelProduct = async (selectedId) => {

    try {
      dispatch({ type: "singel_product_loading" });

      const res = await axios.get(`https://dummyjson.com/products/${selectedId}`)

      dispatch({ type: "singel_set_api_data", payload: res.data });
    } catch (error) {
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
