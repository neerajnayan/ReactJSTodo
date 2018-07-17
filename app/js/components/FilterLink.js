import React, { Component } from "react";
import Link from "./Link";
import { setVisibilityFilter } from "../actions";
import store from "../store";

export default class FilterLink extends Component {
	componentDidMount() {
		const { store } = this.props;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const props = this.props;
		const { store } = props;
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
