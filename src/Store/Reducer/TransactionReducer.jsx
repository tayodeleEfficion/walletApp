import { ADD_TRANSACTION } from "../Types";
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
};
