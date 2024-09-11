import { call, put, takeEvery } from "redux-saga/effects";
import { COUNTER_ACTIONS, actions } from "../reducers/counter";

function* increment() {
  try {
    const data = yield call(
      () => new Promise((resolve) => setTimeout(() => resolve(1), 100))
    );
    yield put(actions.incrementSuccess(data));
  } catch (error) {
    yield put(actions.incrementError(error));
  }
}

export const sagas = [takeEvery(COUNTER_ACTIONS.INCREMENT_REQUEST, increment)];
