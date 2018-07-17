import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AppRoot from "./components/AppRoot.jsx";
import reducers from "./reducers";

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<AppRoot />
	</Provider>,
	document.getElementById("app-root")
);
