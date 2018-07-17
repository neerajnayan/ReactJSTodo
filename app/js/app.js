import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import AppRoot from "./components/AppRoot.jsx";
import reducers from "./reducers";
import Provider from "./Provider";

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<AppRoot />
	</Provider>,
	document.getElementById("app-root")
);
