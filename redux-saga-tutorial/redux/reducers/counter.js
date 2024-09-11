const initialState = {
  counter: 0,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT_ERROR:
      return { ...state, error: action.error };
    case COUNTER_ACTIONS.INCREMENT_REQUEST:
      return { ...state };
    case COUNTER_ACTIONS.INCREMENT_SUCCESS:
      return { ...state, counter: state.counter + action.payload };

    case COUNTER_ACTIONS.RESET:
      return { ...initialState };
    default:
      return state;
  }
};

export const COUNTER_ACTIONS = {
  INCREMENT_ERROR: "INCREMENT_ERROR",
  INCREMENT_REQUEST: "INCREMENT_REQUEST",
  INCREMENT_SUCCESS: "INCREMENT_SUCCESS",

  RESET: "RESET",
};

export const actions = {
  incrementRequest: () => ({
    type: COUNTER_ACTIONS.INCREMENT_REQUEST,
  }),
  incrementSuccess: (payload) => ({
    type: COUNTER_ACTIONS.INCREMENT_SUCCESS,
    payload: payload,
  }),
  incrementError: (error) => ({
    type: COUNTER_ACTIONS.INCREMENT_ERROR,
    error: error,
  }),

  resetCounter: () => ({
    type: COUNTER_ACTIONS.RESET,
  }),
};

export const selectors = {
  getCounter: (state) => state.data.counter,
};
