import ReactDOM from "react-dom/client";

import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";

import ThemeProvider from "./components/ThemeProvider.jsx";
import { store, persistor } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
    ,
  </PersistGate>
);
