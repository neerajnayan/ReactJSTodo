import React from "react";
import { addTodo } from "../actions";

const AddTodo = ({ store }) => {
	let input;

	return (
		<div>
			<input
				ref={node => {
					input = node;
				}}
			/>
			<button
				onClick={() => {
					store.dispatch(addTodo(input.value));
					input.value = "";
				}}
			>
				Add TodoList
			</button>
		</div>
	);
};

export default AddTodo;
