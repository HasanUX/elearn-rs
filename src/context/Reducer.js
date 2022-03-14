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

    case "DELETE_ALL_FROM_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_FOLLOWERS":
      return { ...state, sort: action.payload };
    case "FILTER_BY_LIVE_CLASS":
      return { ...state, byLiveClass: !state.byLiveClass };
    case "FILTER_BY_BEGINNER":
      return { ...state, byBeginner: !state.byBeginner };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {
        byBeginner: false,
        byLiveClass: false,
        byRating: 0,
        searchQuery: "",
      };

    default:
      return state;
  }
};
