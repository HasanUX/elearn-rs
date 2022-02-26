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
    suffix: faker.company.bs(),
    follower: faker.datatype.number({ min: 20, max: 200 }),
    contact: faker.phone.phoneNumber(),
    address: faker.address.streetName(),
    image: `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`,
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    homeDelivery: faker.datatype.boolean(),
    parkingSpace: faker.datatype.boolean(),
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
    byHomeDelivery: false,
    byParkingSpace: false,
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
