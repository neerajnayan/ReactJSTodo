import React, { Component } from "react";
import { setVisibilityFilter } from "../actions";
import store from "../store";

const FilterLink = ({ filter, currentFilter, children }) => {
	if (filter === currentFilter) {
		return <span>{children}</span>;
	}
	return (
		<a
			href="#"
			onClick={e => {
				e.preventDefault();
				store.dispatch(setVisibilityFilter(filter));
			}}
		>
			{children}
		</a>
	);
};

export default FilterLink;
