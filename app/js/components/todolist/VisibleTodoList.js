import React, { Component } from 'react';
import TodoList from './TodoList.js';
import FetchError from './FetchError';

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
		const { toggleTodo, errorMessage, todos, isFetching } = this.props;
		if (isFetching && !todos.length) {
			return <p>Loading...</p>;
		}
		if (errorMessage && !todos.length) {
			return (
				<FetchError
					message={errorMessage}
					onRetry={() => this.fetchData()}
				/>
			);
		}

		return (
			<TodoList 
			  todos={todos} 
			  onTodoClick={toggleTodo} 
			/>
		);
	};
}