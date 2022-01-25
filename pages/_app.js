import "../styles/globals.css";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
