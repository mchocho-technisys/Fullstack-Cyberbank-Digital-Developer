import { combineReducers } from "redux";
import { reducer as CounterReducer } from "./counter";

const rootReducer = combineReducers({
  data: CounterReducer,
});

export default rootReducer;
