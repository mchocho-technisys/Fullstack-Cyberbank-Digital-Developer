export const COUNTER_ACTIONS = {
  INCREMENT_ERROR: "INCREMENT_ERROR",
  INCREMENT_REQUEST: "INCREMENT_REQUEST",
  INCREMENT_SUCCESS: "INCREMENT_SUCCESS",
};

export const incrementRequest = (payload) => ({
  type: COUNTER_ACTIONS.INCREMENT_REQUEST,
  payload: payload,
});

export const incrementSuccess = () => ({
  type: COUNTER_ACTIONS.INCREMENT_SUCCESS,
});

export const incrementError = (error) => ({
  type: COUNTER_ACTIONS.INCREMENT_ERROR,
  error: error,
});
