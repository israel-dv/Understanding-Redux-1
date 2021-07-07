import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { name: "Israel Moreno", quantity: 2500 };
export const store = createStore(reducer, initialState);
