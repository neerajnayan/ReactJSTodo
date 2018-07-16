import React from "react";
import ReactDOM from "react-dom";

import AppRoot from "./components/AppRoot.jsx";
import Store from "./store";

function render() {
	ReactDOM.render(
		<AppRoot {...Store.getState()} />,
		document.getElementById("app-root")
	);
}
Store.subscribe(render);
render();
