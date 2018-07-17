import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

//Function component that does not have this
//also receive context, but as second argument.
//Extracting store from that context
const AddTodo = ({ dispatch }) => {
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
					dispatch(addTodo(input.value));
					input.value = "";
				}}
			>
				Add TodoList
			</button>
		</div>
	);
};

export default connect()(AddTodo);
