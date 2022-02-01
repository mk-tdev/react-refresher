import { combineReducers } from "redux";
import { reducer as repoReducer } from "./repoReducer";

const reducers = combineReducers({
  repoReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;