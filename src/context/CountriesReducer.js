import { FETCH_ALL_COUNTRIES } from "./constants";

const CountriesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ALL_COUNTRIES:
      return action.payload;

    default:
      return state;
  }
};

export default CountriesReducer;
