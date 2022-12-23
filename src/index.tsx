import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./globalStyle";
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <App />
      <GlobalStyles />
    </Router>
  </Provider>
);
