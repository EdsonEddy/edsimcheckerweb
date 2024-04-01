import { createStore } from "redux";
import menuReducer from "./menuReducer";

const store = createStore(menuReducer);

export default store;
