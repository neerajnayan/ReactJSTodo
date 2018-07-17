import React from "react";
import { addTodo } from "../actions";

//Function component that does not have this
//also receive context, but as second argument.
//Extracting store from that context
const AddTodo = (props, { store }) => {
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

// This must be declared for context
// to work correctly.
AddTodo.contextTypes = {
	store: React.PropTypes.object
};

export default AddTodo;
