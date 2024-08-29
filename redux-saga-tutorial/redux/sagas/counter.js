import { call, put, takeEvery } from "redux-saga/effects";
import {
  COUNTER_ACTIONS,
  incrementError,
  incrementSuccess,
} from "../actions/counter";

function* increment() {
  try {
    const data = yield call(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve(["item1", "item2"]), 1000)
        )
    );
    yield put(incrementSuccess(data));
  } catch (error) {
    yield put(incrementError(error));
  }
}

export const sagas = [takeEvery(COUNTER_ACTIONS.INCREMENT_REQUEST, increment)];
