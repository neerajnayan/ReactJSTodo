import React, { Component } from 'react';
import TodoList from './TodoList.js';

export default class VisibleTodoList extends Component {
	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate(prevProps) {
		if (this.props.filter !== prevProps.filter) this.fetchData();
	}

	fetchData() {
		const { filter, fetchTodos } = this.props;
		fetchTodos(filter);
	}

	render() {
		const { toggleTodo, todos, isFetching } = this.props;
		if (isFetching && !todos.length) {
			return <p>Loading...</p>;
		}

		return (
			<TodoList 
			  todos={todos} 
			  onTodoClick={toggleTodo} 
			/>
		);
	};
}