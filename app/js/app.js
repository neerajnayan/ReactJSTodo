import React from "react";
import ReactDOM from "react-dom";

import AppRoot from "./components/AppRoot.jsx";
import store from "./store";

ReactDOM.render(<AppRoot store={store} />, document.getElementById("app-root"));
