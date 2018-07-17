import React, { Component } from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";

const AppRoot = ({ store }) => (
	<div>
		<AddTodo store={store} />
		<VisibleTodoList store={store} />
		<Footer store={store} />
	</div>
);

export default AppRoot;
