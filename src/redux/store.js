import { createStore } from "redux";
import reducer from "./add-product/reducer";

const store = createStore(reducer);
export default store;
