import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const rootReducer = combineReducers({});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
