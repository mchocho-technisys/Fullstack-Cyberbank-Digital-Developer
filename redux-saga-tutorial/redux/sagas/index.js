import { all } from "redux-saga/effects";
import { sagas as CounterSagas } from "./counter";

export default function* rootSaga() {
  yield all(CounterSagas);
}
