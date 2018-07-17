import React, { Component } from "react";

/**
 * This class will ensure that redux store is available
 * to all child components implicitly.
 */
export default class Provider extends Component {
	// This must be implemented, which will be invoked
	// by React framework
	getChildContext() {
		return {
			store: this.props.store
		};
	}

	// Return the children as is.
	render() {
		return this.props.children;
	}
}

// This must be set for Provider
// class for context to work correctly.
Provider.childContextTypes = {
	store: React.PropTypes.object
};
