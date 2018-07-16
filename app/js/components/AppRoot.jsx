import React, { Component } from "react";
import store from "../store";
import { addTodo, toggleTodo, setVisibilityFilter } from "../actions";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter(t => t.completed);
		case "SHOW_ACTIVE":
			return todos.filter(t => !t.completed);
	}
};

const AppRoot = ({ todos, visibilityFilter }) => (
	<div>
		<AddTodo onAddClick={todo => store.dispatch(addTodo(todo))} />
		<TodoList
			todos={getVisibleTodos(todos, visibilityFilter)}
			onTodoClick={id => store.dispatch(toggleTodo(id))}
		/>
		<Footer
			visibilityFilter={visibilityFilter}
			onFilterClick={filter =>
				store.dispatch(setVisibilityFilter(filter))
			}
		/>
	</div>
);

export default AppRoot;
