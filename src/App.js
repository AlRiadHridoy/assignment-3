import React from "react";
import Navbar from "./components/Navbar";
import "./assets/styles/output.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
};

export default App;
