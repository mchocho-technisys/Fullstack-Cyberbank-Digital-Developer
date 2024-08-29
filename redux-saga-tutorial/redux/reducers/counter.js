import { COUNTER_ACTIONS } from "../actions/counter";

const initialState = {
  counter: 0,
  error: null,
  success: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT_ERROR:
      return { ...state, error: action.error };
    case COUNTER_ACTIONS.INCREMENT_REQUEST:
      return { ...state, counter: action.payload };
    case COUNTER_ACTIONS.INCREMENT_SUCCESS:
      return { ...state, success: true };
    default:
      return state;
  }
};
