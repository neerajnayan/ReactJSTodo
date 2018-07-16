import React, { Component } from "react";
import store from "../store";
import { addTodo, toggleTodo } from "../actions";

class AppRoot extends Component {
	render() {
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
				<ul>
					{this.props.todos.map(todo => (
						<li
							key={todo.id}
							onClick={() => {
								store.dispatch(toggleTodo(todo.id));
							}}
							style={{
								textDecoration: todo.completed
									? "line-through"
									: "none"
							}}
						>
							{todo.text}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default AppRoot;
