import React from 'react';
import ReactDOM from "react-dom";
import styles from "./index.module.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store/store";
// import { createRoot } from 'react-dom/client';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
// const root = createRoot(document.getElementById('root')); // notice the '!'
// root.render(
//   <App />
// );



