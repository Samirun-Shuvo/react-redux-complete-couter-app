import { createStore } from "redux";
import counterReducer from "./Redux/Reducer/CounterReducer";

const store = createStore(counterReducer);
export default store;