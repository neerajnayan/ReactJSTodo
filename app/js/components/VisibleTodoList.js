import React, { Component } from "react";
import TodoList from "./TodoList";
import { toggleTodo } from "../actions";

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

export default class VisibleTodoList extends Component {
	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const props = this.props;
		const { store } = this.context;
		const state = store.getState();
		return (
			<TodoList
				todos={getVisibleTodos(state.todos, state.visibilityFilter)}
				onTodoClick={id => store.dispatch(toggleTodo(id))}
			/>
		);
	}
}

// This must be declared for context
// to work correctly.
VisibleTodoList.contextTypes = {
	store: React.PropTypes.object
};
