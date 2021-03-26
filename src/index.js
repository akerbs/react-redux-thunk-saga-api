import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import createSagaMiddelware from "redux-saga";
import thunk from "redux-thunk";
import App from "./App";
import { rootReducer } from "./redux/rootReducer";
import { sagaWatcher } from "./redux/sagas";

const saga = createSagaMiddelware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga, thunk))
);

saga.run(sagaWatcher);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
