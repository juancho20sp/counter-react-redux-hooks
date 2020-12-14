import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Para crear el store
import { createStore } from "redux";

// Para traer el provider
import { Provider } from "react-redux";

// Traemos el reducer
import { reducer } from "./redux/reducer";

// Creamos el estado inicial
const initialState = {
  count: 100
};

// La función create store recibe el REDUCER y el INITIAL STATE
const store = createStore(reducer, initialState);

// Encerramos nuestro árbol de componentes en el Provider y le pasamos el store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
