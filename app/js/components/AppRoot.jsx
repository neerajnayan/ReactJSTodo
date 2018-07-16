import React, { Component } from "react";
import store from "../store";
import { addTodo, toggleTodo } from "../actions";
import TodoList from "./TodoList";
import FilterLink from "./FilterLink";

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

class AppRoot extends Component {
	render() {
		const { todos, visibilityFilter } = this.props;
		const visibleTodos = getVisibleTodos(todos, visibilityFilter);
		return (
			<div>
				<input
					ref={node => {
						this.input = node;
					}}
				/>
				<button
					onClick={() => {
						store.dispatch(addTodo(this.input.value));
						this.input.value = "";
					}}
				>
					Add TodoList
				</button>
				<TodoList
					todos={visibleTodos}
					onTodoClick={id => store.dispatch(toggleTodo(id))}
				/>
				<p>
					Show:{" "}
					<FilterLink
						filter="SHOW_ALL"
						currentFilter={visibilityFilter}
					>
						All
					</FilterLink>{" "}
					<FilterLink
						filter="SHOW_ACTIVE"
						currentFilter={visibilityFilter}
					>
						Active
					</FilterLink>{" "}
					<FilterLink
						filter="SHOW_COMPLETED"
						currentFilter={visibilityFilter}
					>
						Completed
					</FilterLink>
				</p>
			</div>
		);
	}
}

export default AppRoot;
