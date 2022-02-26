const storageKey = "localCart";
const initialState = [];

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem(storageKey)) || initialValue;

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_FOLLOWERS":
      return { ...state, sort: action.payload };
    case "FILTER_BY_DELIVERY":
      return { ...state, byHomeDelivery: !state.byHomeDelivery };
    case "FILTER_BY_PARKING_SPACE":
      return { ...state, byParkingSpace: !state.byParkingSpace };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byHomeDelivery: false,
        byRating: 0,
        searchQuery: "",
      };

    default:
      return state;
  }
};
