import React, { Component } from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";

const AppRoot = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default AppRoot;
