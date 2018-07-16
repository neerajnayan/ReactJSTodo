import React from "react";
import ReactDOM from "react-dom";

import AppRoot from "./components/AppRoot.jsx";
import Store from "./store";

function render() {
	ReactDOM.render(
		<AppRoot todos={Store.getState().todos} />,
		document.getElementById("app-root")
	);
}
Store.subscribe(render);
render();
