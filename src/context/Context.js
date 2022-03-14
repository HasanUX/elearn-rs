import React, { createContext, useContext, useEffect, useReducer } from "react";
//import faker from "faker-js";
import { cartReducer, initializer, productReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const { faker } = require("@faker-js/faker");
  faker.seed(99);
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    findName: faker.name.findName(),
    details: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`,
    liveClass: faker.datatype.boolean(),
    beginner: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(
    cartReducer,
    {
      products: products,
      cart: [],
    },
    initializer
  );

  const [productState, productDispatch] = useReducer(productReducer, {
    byLiveClass: false,
    byBeginner: false,
    byRating: 0,
    searchQuery: "",
  });

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(state));
  }, [state]);

  //  console.log(products);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
