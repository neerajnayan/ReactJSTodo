import React, { Component } from "react";
import Link from "./Link";
import { setVisibilityFilter } from "../actions";

export default class FilterLink extends Component {
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
			<Link
				active={props.filter === state.visibilityFilter}
				onClick={() =>
					store.dispatch(setVisibilityFilter(props.filter))
				}
			>
				{props.children}
			</Link>
		);
	}
}

// This must be declared for context
// to work correctly.
FilterLink.contextTypes = {
	store: React.PropTypes.object
};
