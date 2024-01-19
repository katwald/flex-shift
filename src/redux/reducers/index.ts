import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";

const reducers = combineReducers({
  bookingData: bookingReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
